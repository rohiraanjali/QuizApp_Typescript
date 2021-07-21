const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { initializeDBConnection } = require("./Database/Db.js");

initializeDBConnection();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json("API is running");
})

app.listen(5000, console.log("server started on PORT 5000"))