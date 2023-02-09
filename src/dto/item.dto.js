const getPaginationInfo = require('../utils/pagination.js')

const getItemDetails = (item) => ({
    id:          item._id,
    name:        item.name,
    description: item.description,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt
});

module.exports = {
    getItemResponseDTO: (items, page, limit, count) => ({
        data:       items.map(getItemDetails),
        pagination: getPaginationInfo(page, limit, count)
    }),
    getItemByIdResponseDTO: (item) => ({
        data:       getItemDetails(item),
    }),
    getCreateItemResponseDTO: (item) => ({
        message:    'Success create item',
        data:        getItemDetails(item)
    }),
    getUpdateItemResponseDTO: (item) => ({
        message:    'Success update item',
        data:        getItemDetails(item),
    }),
    getDeleteItemResponseDTO: (item) => ({
        message: 'Success delete item',
        id: item._id,
    })
}