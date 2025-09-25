const express = require('express');
const cors = require('cors');

const executions = [
  {
    "id": 1,
    "robot_name": "ProcessadorPedidos",
    "start_time": "2025-01-15 08:30:00",
    "status": "SUCCESS",
    "output": "Iniciando processamento\nProcessando pedidos\n45 itens processados\nExecução finalizada"
  },
  {
    "id": 2,
    "robot_name": "ValidadorEstoque", 
    "start_time": "2025-01-15 09:00:00",
    "status": "FAILED",
    "output": "Iniciando validação\nERRO: Falha na conexão\nExecução interrompida"
  },
  {
    "id": 3,
    "robot_name": "RelatorioVendas",
    "start_time": "2025-01-15 10:15:00", 
    "status": "SUCCESS",
    "output": "Gerando relatório\nProcessando 128 registros\nRelatório gerado com sucesso"
  },
  {
    "id": 4,
    "robot_name": "ProcessadorPedidos",
    "start_time": "2025-01-15 14:30:00",
    "status": "FAILED", 
    "output": "Iniciando processamento\nERRO: Token expirado\nFalha na autenticação"
  },
  {
    "id": 5,
    "robot_name": "LimpezaArquivos",
    "start_time": "2025-01-15 16:00:00",
    "status": "SUCCESS",
    "output": "Iniciando limpeza\n67 arquivos removidos\nLimpeza concluída"
  }
]


const app = express();

app.use(cors());

app.get('/api/executions', (req, res) => {
  res.json(executions)
});

app.listen(3001, () => {
  console.log("rodando...")
});