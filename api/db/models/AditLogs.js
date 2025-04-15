const mongoose = require("mongoose");

const AditLogsSchema = mongoose.Schema(
  {
    level: {
      type: String,
    },
    email: {
      type: String,
    },
    location: {
      type: String,
    },
    proc_type: {
      type: String,
    },
    log: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class AditLogs extends mongoose.Model {}

Schema.loadClass(AditLogs);

module.exports = mongoose.model("AditLogs", AditLogsSchema);
