const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
