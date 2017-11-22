const express = require('express');
const router = express.Router();

require('./RestControllers/imageController')(router);
require('./RestControllers/PostController')(router);
require('./RestControllers/UserController')(router);
require('./RestControllers/AuthController')(router);


router.get('/', (req,res)=>{
    res.send("API ROUTE");
});

router.get('*', (req,res)=>{
    res.send("NOT FOUND");
});
module.exports = router;