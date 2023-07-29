const express = require("express");
const app = express();
const cors = require("cors");
const route = require('./routes/route')
app.use(cors());


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',route)

app.listen(5000, () => {
  console.log("Listening to 5000");
});
