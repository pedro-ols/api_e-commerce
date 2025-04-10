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

    create = async (req, res) => {
        const { name, price, category, brand, stock, imageUrl, isActive } = req.body;

        try{
            if(!name){
                res.status(400).send("O campo de nome é obrigatórios")
            }
            if(!price){
                res.status(400).send("O campo de preço é obrigatórios")
            }
            if(!category){
                res.status(400).send("O campo de categoria é obrigatórios")
            }
            if(!brand){
                res.status(400).send("O campo de marca é obrigatórios")
            }
            if(!stock){
                res.status(400).send("O campo de quantidade em estoque é obrigatórios")
            }
            const newProduct = await ProductModel.create(name, price, category, brand, stock, imageUrl, isActive);
            res.status(201).json(newProduct).send("Produto criado");        
        } catch(error){
            console.error(error);
            res.status(400).send("Erro ao criar produto");      
        };
    };
};

export default new ProductController;