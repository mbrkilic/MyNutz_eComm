# MyNutz E-Ticaret Sitesi


![wp8903914-mern-stack-wallpapers](https://user-images.githubusercontent.com/80039230/145201938-1021eab0-6014-4567-9651-73c2b6994dd6.jpg)


## Proje Tanıtımı ve Genel Özellikleri
MERN teknolojisi ile e-ticaret sitesi. 

* Tam Özellikli Alışveriş Sepeti
* Ürün İnceleme ve Puanlama
* Ürün Arama
* Kullanıcı Profili (Geçmiş Siparişlere Erişim)
* Admin Paneli
  * Kullanıcı Yönetimi (Yetkilendirme veya Bilgi Güncelleme)
  * Ürün Yönetimi (Ekleme, Çıkarma veya Bilgi Güncelleme)
  * Sipariş Yönetimi (Sipariş Bilgi ve Durum Erişimi)
* Direkt Maile Yönlendirmeli bir İletişim Sayfası


## Kullanım
Öncelikli olarak ana dizine .env dosyası oluşturun ve aşağıdaki verileri ekleyin.

```
NODE_ENV = development
PORT = 5000
MONGO_URI = ** BURAYA MONGODB ADRESİNİZİ YAZIN **
JWT_SECRET = 'abc123'
```

Frontend ve Backend için Dependencies Kurulumu
```
npm install
cd frontend
npm install
```

## Çalıştırmak için

** Ana Bilgisayarda Çalıştırmak için (localhost) **

Frontend (:3000) ve Backend (:5000) (proje) Çalıştırmak için
``` npm run dev```

Sadece backend için
``` npm run server ```

# Site Arayüz ve Genel Bakış
![genel2 00_00_00-00_00_30~1](https://user-images.githubusercontent.com/80039230/145114003-ae5af684-1920-4ead-b40f-d8e675028136.gif)


* Kaydol
![kayıt2 00_00_00-00_00_30](https://user-images.githubusercontent.com/80039230/145113085-a9396522-538b-49ac-a710-7041db24187f.gif)


* Giriş
![giris2 00_00_00-00_00_30](https://user-images.githubusercontent.com/80039230/145113094-f6f1b2f6-badf-4969-bde4-e3d020d50662.gif)

* Admin - Ürün
![admin - ürün2 00_00_00-00_00_30](https://user-images.githubusercontent.com/80039230/145113026-638467d1-4c6d-45dd-9f75-785143323173.gif)


* Admin - Siparişler
![admin - sipariş2 00_00_00-00_00_30](https://user-images.githubusercontent.com/80039230/145113062-1753fa92-5f07-422b-a6d7-c684d5e60f37.gif)


* İletişim
![iletişim2 00_00_00-00_00_30](https://user-images.githubusercontent.com/80039230/145113110-9e31a511-c6e8-4770-8cae-daf8f995a5e9.gif)
