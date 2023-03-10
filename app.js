const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log('Server started at http://localhost:4000/');
});
