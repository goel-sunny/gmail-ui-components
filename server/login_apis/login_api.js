'use strict';

let port_no = 3000;

const express = require('express');
const app = express();

const token = require('../authentication_apis/jwt_apis');


// middleware  
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// GET :: LOGIN CALL
app.post('/login', function (req, res) {
    // sending the token 
    res.send(token.jwtTokenGeneration(req.body));
})


// listen on the port 3000
app.listen(port_no);