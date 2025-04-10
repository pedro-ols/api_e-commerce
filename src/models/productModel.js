import prisma from "../../prisma/client.js";

class ProductModel {
  getAll = async () => {
    return await prisma.product.findMany();
  };

  getById = async (id) => {
    return await prisma.product.findUnique({
      where: { id },
    });
  };
  create = async (name, price, category, brand, stock) => {
    return await prisma.product.create({
      data: {
        name,
        price,
        category,
        brand,
        stock,
      },
    });
  };
  update = async (id, name, price, category, brand, stock, imageUrl, isActive) => {
    try {
      const product = await prisma.product.update({
        where: { id },
        data: {
          name: name !== undefined ? name : true,
          price,
          category,
            brand,  
            stock,
            imageUrl,
            isActive,
        },
      });

      return product;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };
  delete = async (id) => {
    try {
      const productDeleted = await prisma.product.delete({
        where: { id },
      });

      return productDeleted;
    } catch (error) {
      console.log("Erro ao deletar o produto!", error);
      throw error;
    }
  }
}

export default new ProductModel();
