let express=require('express')
let app=express();
//console.log(process.argv[3]);

app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))

app.listen(process.argv[2]);

// var express = require('express');
// var path    = require('path');
// //var stylus  = require('stylus');

// var app = express();

// //var portNumber = process.argv[2];
// //var pathSite = process.argv[3];

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));

// app.listen(process.argv[2]);