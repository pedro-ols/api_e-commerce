import express from "express";
import productRoutes from "./routes/productRoutes.js";
// import tarefaRoutes from "./routes/tarefaRoutes.js";

const app = express();
const port = 4000;

app.use(express.json());

// app.use("/tarefas", tarefaRoutes);
app.use("/produtos", productRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
