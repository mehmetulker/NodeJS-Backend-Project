const mongoose = require("mongoose");

const UserRolesSchema = mongoose.Schema(
  {
    role_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    permission: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class UserRoles extends mongoose.Model {}

Schema.loadClass(UserRoles);

module.exports = mongoose.model("UserRoles", UserRolesSchema);
