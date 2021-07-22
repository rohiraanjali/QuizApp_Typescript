const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { initializeDBConnection } = require("./Database/Db.js");
const CategoryRoutes = require("./routes/category.routes");
const Category = require("./models/category.models");
const errorHandler = require("./middleware/error-handler");
const routeNotFound = require("./middleware/route-not-found");

initializeDBConnection();

app.use(cors());
app.use(bodyParser.json());


app.use(CategoryRoutes)
app.use(errorHandler);
app.use(routeNotFound);


app.get("/", (req, res) => {
    res.json("API is running");
})

app.listen(5000, console.log("server started on PORT 5000"))