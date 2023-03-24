{ Schema, model, SchemaType } = require("mongoose");


const phoneSchema = new Schema(
  {
    model: {
      type: String,
      trim: true,
      required: true,
      unique: true
    }
}

);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;