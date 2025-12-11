// Importando biblioteca express
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());

// Middleware para ler JSON do corpo da requisição
app.use(express.json());

const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "public")));

// GET - Consulta os dados cadastrados
app.get ("/agendamentos", async (req, res)=>{
});

app.listen(3000, function(){
    console.log("O servidor está rodando na porta 3000");
});