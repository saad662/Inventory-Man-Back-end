const express = require('express');
const cors = require("cors");
require('./db/config');
const app = express();
const userRoutes = require("./routes/userRoutes");
const userProducts = require("./routes/userProducts");

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);
app.use('/', userProducts);


app.listen(5000);