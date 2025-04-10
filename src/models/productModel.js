import prisma from "../../prisma/client.js"

class ProductModel {
    getAll = async () => {
        return(
            await prisma.product.findMany()
        );
    };

    getById = async (id) =>{
        return(
            await prisma.product.findUnique({
                where: { id },
            })
        );
    };
    create = async (name, price, category, brand, stock) =>{
        return await prisma.product.create({
            data: {
              name,
              price,
              category,
              brand,
              stock
            },
          });
    }
};

export default new ProductModel;