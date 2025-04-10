import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

// Rota que retorna todos os produtos cadastrados
router.get("/", ProductController.getAll);
// Rota que busca um produto filtra por seu ID (chave primária)
router.get("/:id", ProductController.getById);
// Rota que cadastra um novo produto
// router.post("/", ProductController.create);
// Rota que atualiza as informações de um produto
// router.put("/", ProductController.update);
//Rota que deleta o cadastro de um produto
// router.delete("/", ProductController.delete);

export default router;