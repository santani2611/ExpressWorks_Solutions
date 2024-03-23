const express=require('express');
const app=express();

const port=process.argv[2];

app.get('/search',(req,res)=>{
  // console.log(req.query);
  const query=req.query;
  res.send(query);
})





app.listen(port);