const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST request to /products',
        createProduct: product
    });
});

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;

    if(id === 'special'){
        res.status(200).json({
        message: 'You have chosen the special item',
        id: id
    })
    } else{
        res.status(200).json({
            message: 'You are not so special'
        });
    }
});

router.patch('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'updated product'
    });
});

router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});

module.exports = router;