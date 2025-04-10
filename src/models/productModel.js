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
};

export default new ProductModel;