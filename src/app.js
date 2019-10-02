const express = require("express");
const router = require("./routes/router");
require("dotenv").config();
const app = express();
const PORT = 80;

app.use(router);

app.listen(PORT, () => console.log("Express server is running"));
