# dApp-Starter-RC
dapp kodlamak isteyenler için basit bir template.

Ubuntu 20.04 LTS Sunucu kullanacağız, özelliklerin fazla olmasına gerek yok. 2CPU 4 RAM yeterli

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
git clone fsdfdsfsdfd
cd fasdasdas
npm install
```

### Sunucumuzun yapılandırmasını yapalım.
```
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo ufw enable
sudo ufw allow 'Nginx Full'
sudo ufw allow 22
sudo ufw allow 3000
sudo ufw allow 80
sudo ufw status
```

### Her şey hazır Sunucumuzu başlatalım
```
cd my-react-app
npm start
```
