import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";

const app = express();
const PORT = 3000;

//mongo conection
//this will allow us to use a promise to connect to mongo
//mongo will tell us when we are conected
//promise will expect a response before it will tell if its a sucsess.
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//body parser set up
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(`Our MERN app is running on port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Our MERN server is running on port: ${PORT}`);
});
