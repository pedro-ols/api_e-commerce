import ProductModel from "../models/productModel.js";

class ProductController {
  getAll = async (req, res) => {
    try {
      const products = await ProductModel.getAll();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar produtos.");
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const product = await ProductModel.getById(parseInt(id));
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar produto.");
    }
  };

  create = async (req, res) => {
    const { name, price, category, brand, stock, imageUrl, isActive } =
      req.body;

    try {
      if (!name) {
        res.status(400).send("O campo de nome é obrigatórios");
      }
      if (!price) {
        res.status(400).send("O campo de preço é obrigatórios");
      }
      if (!category) {
        res.status(400).send("O campo de categoria é obrigatórios");
      }
      if (!brand) {
        res.status(400).send("O campo de marca é obrigatórios");
      }
      if (!stock) {
        res.status(400).send("O campo de quantidade em estoque é obrigatórios");
      }
      const newProduct = await ProductModel.create(
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      );
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(400).send("Erro ao criar produto");
    }
  };
  update = async (req, res) => {
    const { id } = req.params;
    const { name, price, category, brand, stock, imageUrl, isActive } =
      req.body;

    try {
      const updatedProduct = await ProductModel.update(
        Number(id),
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      );

      if (!updatedProduct) {
        return res.status(404).json({ erro: "Produto não encontrada!" });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar produto!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedProduct = await ProductModel.delete(Number(id));

      if (!deletedProduct) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
      }

      res.json(deletedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar produto!" });
    }
  }
}

export default new ProductController();
