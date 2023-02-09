const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);;

module.exports = mongoose.model('ItemModel', itemSchema);