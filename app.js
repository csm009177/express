// import module 
const express = require('express');
const app = express;
const bodyParser = require('body-parser')

const port = 2317;

app.use(bodyParser.urlencoded({extended:false}));
