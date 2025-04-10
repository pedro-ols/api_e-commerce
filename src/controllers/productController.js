import ProductModel from "../models/productModel.js"

class ProductController {
    getAll = async (req, res) => {
        try {
            const products = await ProductModel.getAll();
            res.status(200).json(products);
        } catch(error) {
            console.error(error);
            res.status(500).send("Erro ao buscar produtos");
        };
    };
};

export default new ProductController;