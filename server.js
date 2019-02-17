const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

mongoose.Promise = Promise;
mongoose.connect("mongodb://testuser:password1@ds139295.mlab.com:39295/heroku_nz62sfq8");
var db = mongoose.connection;


db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("connection successful");
    app.listen(PORT, function() {
        console.log(`App running on port + on PORT ${PORT}!`);
    });
});