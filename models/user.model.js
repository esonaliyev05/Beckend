const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }, 
    is_activated: { type: Boolean, default: false },
    activation_link: { type: String }, 
  },
  { timestamps: true }
)

module.exports = model("User", UserSchema)