const express = require("express");
const router = express.Router(); // Audit logları için router oluştur

// Controller dosyasından fonksiyonları al
//const {} = require("../controllers/userController");

router.get("/auditlogs", (req, res, next) => {
  res.json({
    body: req.body, // İstek gövdesi
    headers: req.headers, // İstek başlıkları
    params: req.params, // İstek parametreleri
    query: req.query, // İstek sorgu parametreleri
    url: req.url, // İstek URL'si
    method: req.method, // İstek metodu (GET, POST, vb.)
    protocol: req.protocol, // İstek protokolü (HTTP, HTTPS)
    hostname: req.hostname, // İstek ana bilgisayarı (domain)
  });
});
//reg bize gelen istekleri temsil eder
//Bize gelen istegi içinde bulunan body,headers,params,query gibi bilgileri alabiliriz
//res bize cevap döndürmemizi sağlayan bir nesnedir içinde send, json gibi fonksiyonlar var.ilgili fonkisyonları kullanarak istemciye cevap döndürebiliriz body,headers,alanını veri olarak döndürebiliriz
//next ise bir sonraki middleware'e geçmemizi sağlar

module.exports = router;
