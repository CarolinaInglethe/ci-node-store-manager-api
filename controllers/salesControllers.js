const salesServices = require('../services/salesSevices');

const create = async (req, res) => {
    const { productId, quantity } = req.body;
    const createdSales = await salesServices.create(productId, quantity);
    
    if (createdSales.err) {
        return res.status(422).json(createdSales);
    }

    return res.status(200).json(createdSales);
};

module.exports = {
    create,
};