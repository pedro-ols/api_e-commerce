import express from "express";
import ProductControlles from "../controllers/productController.js";

const router = express.Router();

// Rota que retorna todos os produtos cadastrados
router.get("/", tarefaController.getAll);
// Rota que busca um produto filtra por seu ID (chave primária)
router.get("/:id", tarefaController.getByID);
// Rota que cadastra um novo produto
router.post("/", tarefaController.create);
// Rota que atualiza as informações de um produto
router.get("/", tarefaController.update);
//Rota que deleta o cadastro de um produto
router.get("/", tarefaController.delete);