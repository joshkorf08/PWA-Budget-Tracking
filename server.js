const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const path = require("path");
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://Joshuakorf:Joshua123456$@cluster0.cha98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true
  
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});