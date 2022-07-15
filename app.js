require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;


app.get("/getenv",function(req,res){
    res.send(process.env.NODE_ENV);
});

app.get("/",function(req,res){
    res.send(process.env.Poc2);
});



// app.listen(3000,function(){
//     console.log("app listening on port 3000");
// });
app.listen(port, () => console.log("app listening on port ${port}!"));