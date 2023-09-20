const { Router } = require('express');
const Product = require('../db/Product');

const router = Router();

router.post("/add-product",  async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

router.get("/products",async (req, resp) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    }
    else {
        resp.send({ result: "No Products Found" });
    }
});

router.delete("/products/:id",  async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    resp.send(result);
});

router.get("/products/:id", async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    }
    else {
        resp.send({ result: "No record found" })
    }
});


router.put("/products/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result);
});

router.get("/search/:key",  async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key, $options: "i" } },
            { company: { $regex: req.params.key, $options: "i" } }
        ]
    });
    resp.send(result);
});


module.exports = router;