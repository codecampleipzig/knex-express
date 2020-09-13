const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({msg: "Hello World"})
})

app.listen(PORT, () => console.log(`Server started listening on http://localhost:${PORT}`))