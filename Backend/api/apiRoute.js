const express = require('express');
const router = express.Router();

const imageRoute = require('./RestControllers/imageController')(router);
const postRoute = require('./RestControllers/PostController')(router);
const userRoute = require('./RestControllers/UserController')(router);

router.get('/', (req,res)=>{
    res.send("API ROUTE");
});

router.get('*', (req,res)=>{
    res.send("NOT FOUND");
});
module.exports = router;