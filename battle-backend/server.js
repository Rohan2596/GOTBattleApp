const express=require('express');
const app=express();
const route=require('./routes/battle.routes');

app.use('/battle',route);






app.listen(3001,(()=>{
    console.log("Server is Listening to Port 3001");
}))