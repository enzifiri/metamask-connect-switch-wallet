import React, { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
import WalletInfo from './WalletInfo'; // WalletInfo'yu import et


window.onerror = function (message, source, lineno, colno, error) {
  console.error("Bir hata yakalandı:", message, source, lineno, colno, error);
  // Hata detaylarını bir sunucuya göndermek için AJAX isteği veya benzeri bir yöntem kullanabilirsiniz.
  return true; // Bu, tarayıcının varsayılan hata yöneticisini devre dışı bırakır.
};

window.onunhandledrejection = function (event) {
  console.error("Yakalanmamış bir Promise reddi:", event.reason);
  // Promise reddinin detaylarını sunucuya göndermek için burada işlem yapabilirsiniz.
  return true;
};

const networks = {
  aazifiri: {
    chainId: '0x78d851',
    chainName: 'aazifiri',
    nativeCurrency: {
      name: 'iri',
      symbol: 'iri',
      decimals: 18
    },
    rpcUrls: ['https://froopyland.dymension.xyz/16/aazifiri_7919697-1/evmrpc'],
    blockExplorerUrls: ['https://froopyland.dymension.xyz/'],
  }
};

function App() {
  const [setWeb3] = useState(null); // web3 nesnesi için state tanımla
  const [setError] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [notification, setNotification] = useState(''); // Bildirim mesajı için state
  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(new Web3(window.ethereum)); // web3 nesnesini başlat ve state'e at
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
      await changeNetwork('aazifiri');
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
   
    // Bildirim mesajını kaldırmak için bir fonksiyon
  const clearNotification = () => {
    setTimeout(() => {
      setNotification('');
    }, 3000); // 3 saniye sonra bildirimi kaldır
  };

  // Bildirim mesajı değiştiğinde, otomatik olarak kaldırma işlemini tetikle
  
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
