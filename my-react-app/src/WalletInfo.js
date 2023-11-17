import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

function WalletInfo() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const loadWalletData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      if (accounts.length > 0) {
        const account = accounts[0];
        const balance = await web3.eth.getBalance(account);

        setAccount(`${account.substring(0, 6)}...${account.substring(account.length - 4)}`);
        setBalance(web3.utils.fromWei(balance, 'ether'));
      } else {
        setAccount('');
        setBalance('0.0000');
      }
    }
  };

  useEffect(() => {
    loadWalletData();

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setAccount('');
        setBalance('0.0000');
      } else {
        loadWalletData();
      }
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', loadWalletData);


    const balanceInterval = setInterval(() => {
      loadWalletData();
    }, 1000); 


    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', loadWalletData);
      }
      clearInterval(balanceInterval);
    };
  }, []);

  const formattedBalance = balance ? parseFloat(balance).toFixed(4) : '0.0000';

  return (
    <div className="wallet-info">
      <p>Address: {account}</p>
      <p>{formattedBalance} TOKENDENOM</p>
      <button className="faucet-button" onClick={() => window.open('https://rollapp-faucet.vercel.app/', '_blank')}>
        Faucet $TOKENDENOM
      </button>
    </div>
  );
}

export default WalletInfo;
