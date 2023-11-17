<h1 align="center">Basit bir Dapp Altyapısı</h1>

<h3 align="center">
Bu içerik sadece Connect + Switch Wallet fonksiyonlarını dAppinize nasıl ekleyeceğinizi gösteriyor. Bu repoyu tek başına yapmanız işe yaramayacak. Ekstra olarak kendi appinizi yazmanız gerekecek. Bu yüzden gerçekten app yapmak isteyen kişilerin kullanması mantıklı olur. Çünkü hiç bilmeyen biri için dApp yapmak en az 4 5 saat gerektiriyor (şahsen). Kesinlikle dAPP kodlarken Youtube + ChatGPTden yararlanın çok faydası alıyor, aldığınız hataları sorunca anında cevap veriyor. <br>
 Basit Dapp Önerisi olarak Nft Mintletme sitesi yapabilirsiniz
Nft Mintletme kontratı için Youtube kaynağı; https://www.youtube.com/watch?v=GwFQg8ROZfo&t
</h3>

## İlham almak amacıyla kendi yazmış olduğum dAppi inceleyebilirsiniz
> https://rollape.quest/
![image](https://github.com/enzifiri/dApp-Starter-RC/assets/76253089/99e5e956-290f-49c1-9400-1e564cc00f34)

<h1 align="center">Karar verdiyseniz başlayalım.</h1>

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
