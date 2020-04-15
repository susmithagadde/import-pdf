const express=require("express");
const app=express();
const logger=require("morgan");
const Data=require("./public/data/post.json");

app.use(logger("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));


app.get("/",function(req,res) {
  return res.send("hello from my app express server!");
});

app.get("/questionsList",function(req,res) {
  return res.send(Data);
});

const port=process.env.PORT||5000;

app.listen(port,() => {
  console.log("Server is up and running on port",port);
});
