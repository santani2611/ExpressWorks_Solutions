var express=require('express');
var app=express();

var port=process.argv[2];

var crypto=require('crypto');

app.put('/message/:id',(req,res)=>{
  var id=req.params.id;
  var hash=crypto
            .createHash("sha1")
            .update(new Date().toDateString()+id)
            .digest("hex");

            res.send(hash);
});

app.listen(port);

// var express = require('express');
// var app = express();

// var portNumber = process.argv[2];

// app.put('/message/:id', function(req, res) {
//   var id = req.params.id;
//   var dateIdHash = require('crypto')
//       .createHash('sha1')
//       .update(new Date().toDateString() + id)
//       .digest('hex');
  
//   res.send(dateIdHash);
// });

// app.listen(portNumber);