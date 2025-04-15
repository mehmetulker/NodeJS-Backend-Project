const mongoose = require("mongoose");

const RolePrivilegesSchema = mongoose.Schema(
  {
    permission: { type: String },
    role_id: { type: mongoose.Schema.Types.ObjectId, required: true },
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

class RolePrivileges extends mongoose.Model {}

Schema.loadClass(RolePrivileges);

module.exports = mongoose.model("RolePrivileges", RolePrivilegesSchema);
