import prisma from "../../prisma/client.js"

class ProductModel {
    getAll = async () => {
        return(
            await prisma.product.findMany()
        );
    };
};

export default new ProductModel;