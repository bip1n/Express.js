const express = require("express");
const path = require("path");
const app =express();
const port=3000;


const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.send("hello")
//     // a

// });

// app.get("/login",(req,res)=>{
//     // res.send("Hello from the login side");
//     app.use(express.static("X:/Express.js/expressApp/public/login.html"));
// });

app.listen(port,()=>{
    console.log(`Server started at port: ${port}`)
});


