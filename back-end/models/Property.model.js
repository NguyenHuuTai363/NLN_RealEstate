const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
    {
        type: { type: String, require: true },
        name: { type: String, require: true },
        description: { type: String, require: true },
        image: { type: String, require: true },
        country: { type: String, require: true },
        address: { type: String, require: true },
        bedrooms: { type: Number, require: true },
        bathrooms: { type: Number, require: true },
        surface: { type: String, require: true },
        year: { type: Number, require: true },
        price: { type: String, require: true },
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);