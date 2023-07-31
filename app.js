const express= require ("express");
const { listen } = require("express/lib/application");
const app=express();
const port=process.env.PORT ||8000;
app listen (port,()=>{
    console.log(`Server is listen on port ${port}`);
})