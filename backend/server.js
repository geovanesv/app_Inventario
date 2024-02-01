const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());


// Here we are listening to the server
app.listen(PORT, () => {
  console.log(`servidor rodando na porta:${PORT}`);
});
