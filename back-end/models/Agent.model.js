const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        image: { type: String, require: true },
        phone: { type: Number, require: true },  
    },
    { timestamps: true }
);

module.exports = mongoose.model("Agent", AgentSchema);