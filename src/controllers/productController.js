import ProductModel from "../models/productModel.js"

class ProductController {

    getAll = async (req, res) => {
        try {
            const products = await ProductModel.getAll();
            res.status(200).json(products).send("Produtos encontrados!");
        } catch(error) {
            console.error(error);
            res.status(500).send("Erro ao buscar produtos.");
        };
    };

    getById = async (req, res) => {
        const { id } = req.params

        try{
            const product = await ProductModel.getById(parseInt(id));
            res.status(200).json(product).send("Produto encontrado!");
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao buscar produto.")
        };
    };
};

export default new ProductController;