const express = require("express");
const app = express();
const rutasMain = require("./routes/main");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor funcionando en el puerto 3000");
});

app.use("/", rutasMain);
