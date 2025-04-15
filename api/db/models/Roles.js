const mongoose = require("mongoose");

const { Schema } = mongoose;

const RolesSchema = new Schema(
  {
    role_name: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },

    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  //   { timestamps: true }
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Roles extends mongoose.Model {}

Schema.loadClass(Roles);

module.exports = mongoose.model("Roles", RolesSchema);
