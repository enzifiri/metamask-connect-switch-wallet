# dApp-Starter-RC
dapp kodlamak isteyenler için basit bir template.

Ubuntu 20.04 LTS Sunucu kullanacağız, özelliklerin fazla olmasına gerek yok. 2CPU 2 RAM yeterli

## NodeJS ve İlgili Paketleri kuralım.
```
sudo apt update
sudo apt upgrade
cd ~
curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs

```

## Proje Dosyalarını sunucunuza çekin.
```
git clone https://github.com/enzifiri/dApp-Starter-RC.git
sudo mv /root/dApp-Starter-RC/my-react-app /root/
cd my-react-app
npm install
```

### Sunucumuzun yapılandırmasını yapalım.
```
sudo apt update
sudo ufw enable
sudo ufw allow 22
sudo ufw allow 3000
sudo ufw allow 80
sudo ufw reload
sudo ufw status
```

### Her şey hazır Sunucumuzu başlatalım, sonrasında internette ``sunucuipniz:3000`` şeklinde arama yapıp butonları görebileceksiniz.
```
cd my-react-app
npm start
```
