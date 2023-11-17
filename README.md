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

### Nginx kurulumu
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

### Nginx yapılandırmak için
```sudo nano /etc/nginx/sites-available/myreactapp``` sonra alttaki kodu düzenleyip içine yapıştırın.
```
server {
    listen 80;
    server_name SERVERIPADRESİNİZ; # 12.123.423.33 gibi

    location / {
        root /var/www/myreactapp; # React build dizinine işaret edin
        try_files $uri /index.html; # SPA için gerekli
    }
}
```
