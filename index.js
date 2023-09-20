const express = require('express');
const cors = require("cors");
require('./db/config');
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);
app.use('/', productRoutes);


app.listen(5000);