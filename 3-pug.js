const express=require('express');
const app=express();
app.get('/home',(req,res)=>{
  app.set('view engine','pug');
  res.render(process.argv[3],{date:new Date().toDateString()})
})
app.listen(process.argv[2])
