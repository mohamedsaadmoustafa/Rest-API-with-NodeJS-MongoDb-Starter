const express = require('express');
const ItemModel = require('../models/item.models');
const { getItemResponseDTO, getItemByIdResponseDTO, getCreateItemResponseDTO, getUpdateItemResponseDTO, getDeleteItemResponseDTO } = require('../dto/item.dto.js');

//Get all Method
exports.get_items = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const items = await ItemModel.find({ isDeleted: false })
            .sort({ updatedAt: 'desc' })
            .skip((page - 1) * limit)
            .limit(limit)
        const count = await ItemModel.count({ idDeleted: false })
        res.json(getItemResponseDTO(items, page, limit, count))
    }
    catch (error) {
        //res.status(500).json({ message: error.message })
        next(error);
    }
}

//Post Method
exports.post_item = async (req, res) => {
    // MongoDB creates a unique 12 bytes ID for every object
    // using the timestamp of respective Object creation.
    new ItemModel({
        name: req.body.name,
        description: req.body.description
    })
        .save()
        .then((item) => res.status(200).json(getCreateItemResponseDTO(item)))
        .catch((error) =>
            res.status(500).json({ message: 'Something went wrong', error }),
        )
}

//Get Method: random item
exports.get_random_item = async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;
    ItemModel.find({ isDeleted: false })
        .then((items) => res.json(getItemByIdResponseDTO(items[Math.floor(Math.random() * items.length)])))
        .catch((error) =>
            res.status(404).json({ message: 'Item not found', error }),
        )
}


//Get by ID Method
exports.get_item = async (req, res) => {
    ItemModel.findOne({
        _id: req.params.id,
        isDeleted: false
    })
        .then((item) => res.status(200).json(getItemByIdResponseDTO(item)))
        .catch((error) =>
            res.status(404).json({ message: 'Item not found', error }),
        )
}


//Update by ID Method
exports.update_item = async (req, res) => {
    const { name, description } = req.body;
    const to_update_item = {};
    if (name) to_update_item.name = req.body.name;
    if (description) to_update_item.description = req.body.description;

    ItemModel.findOneAndUpdate({
        _id: req.params.id,
        isDeleted: false
    },
        to_update_item,
        { new: true }
    )
        .then((item) => res.status(200).json(getUpdateItemResponseDTO(item)))
        .catch((error) =>
            res.status(404).json({ message: 'Item not found', error }),
        )
}

//Delete by ID Method
exports.delete_item = async (req, res) => {
    /*
    ItemModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Item deleted' }))
    .catch((error) =>
      res.status(404).json({ message: 'Item not found', error }),
    )
    */
    ItemModel.findOneAndUpdate({
        _id: req.params.id,
        isDeleted: false
    }, {
        isDeleted: true
    })
        .then((item) => res.status(200).json(getDeleteItemResponseDTO(item)))
        .catch((error) =>
            res.status(404).json({ message: 'Item not found', error }),
        )
}