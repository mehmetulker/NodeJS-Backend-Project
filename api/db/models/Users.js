const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
    },
  },
  //   { timestamps: true }
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Users extends mongoose.Model {} // User class extends mongoose.Model oluşturuluyor. mongoose kütüphanesinin Model sınıfından türetiliyor. Bu, kullanıcı modelinin Mongoose'un Model özelliklerini kullanmasını sağlar.
schema.loadClass(Users); // Users sınıfını şemaya yüklüyor. Bu, şemanın kullanıcı modelinin özelliklerini ve yöntemlerini kullanmasını sağlar.
// Bu kod, MongoDB veritabanında saklanacak kullanıcıların şemasını (yapısını) tanımlar.
module.exports = mongoose.model("Users", schema); // Kullanıcı modelini dışa aktarıyor. Bu, başka dosyalarda bu modeli kullanabilmemizi sağlar.
// **Satır satır açıklama:**
