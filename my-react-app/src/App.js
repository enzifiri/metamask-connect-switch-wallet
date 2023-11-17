import React, { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
import WalletInfo from './WalletInfo';


window.onerror = function (message, source, lineno, colno, error) {
  console.error("Bir hata yakalandı:", message, source, lineno, colno, error);

  return true;
};

window.onunhandledrejection = function (event) {
  console.error("Yakalanmamış bir Promise reddi:", event.reason);

  return true;
};

const networks = {
  CHAINADINIZ: {
    chainId: 'CHAINIDNİZ',
    chainName: 'CHAINADINIZ',
    nativeCurrency: {
      name: 'TOKENSEMBOL',
      symbol: 'TOKENSEMBOL',
      decimals: 18
    },
    rpcUrls: ['RPC ADRESINIZ'],
    blockExplorerUrls: ['https://froopyland.dymension.xyz/'],
  }
};

function App() {
  const [setWeb3] = useState(null);
  const [setError] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [notification, setNotification] = useState('');
  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(new Web3(window.ethereum));
        setNotification('Wallet successfully connected.');
      } catch (error) {
        console.error("Please Refresh Website:", error);
        setNotification('Already Connected.');
      }
    } else {
      console.log("Wallet not found. Try again.");
      setNotification('Wallet not found.');
    }
  };
    
  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        } catch (error) {
          console.error('', error);
          setError('');
        }
      } else {
        console.log('Metamask is not installed!');
        setError('Metamask is not installed!');
      }
    };

    initializeWeb3();
    // eslint-disable-next-line
  }, []);

const switchNetwork = async () => {
  if (accounts.length > 0) {
    try {
      await changeNetwork('CHAINADINIZ');
      setNotification('Network switched successfully.');
    } catch (error) {
      console.error("Failed to switch network:", error);
      setNotification('Failed to switch network: ' + error.message);
    }
  } else {
    console.log("Wallet not connected.");
    setNotification("Please refresh Website.");
  }
};

const changeNetwork = async (networkName) => {
  if (!window.ethereum) throw new Error("No crypto wallet found");
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{ ...networks[networkName] }]
  });
};
   
    
  const clearNotification = () => {
    setTimeout(() => {
      setNotification('');
    }, 3000); // 3 saniye sonra bildirimi kaldır
  };

  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (notification) {
      clearNotification();
    }
  }, [notification]);
    
  return (
    <div className="App">
      {notification && <div className="toast">{notification}</div>} {/* Bildirim mesajını göster */}
      
      <WalletInfo />
      
      {/* Cüzdana Bağlan butonu */}
      <div className="button">
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>   
        {/* Switch Wallet butonu */}
        <div className="button">
      <button onClick={switchNetwork}>Switch Network</button>
      </div>                 
    </div>
  );
}

export default App;
