const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel=require("./model/user");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.render('new');

});


app.post('/create', async (req,res)=>{
  let{username,email,password,age}=req.body;
   let createdUser = await userModel.create({username,email,password,age});
res.send(createdUser);

});


const PORT = process.env.PORT || 6000; // Change the port here
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



