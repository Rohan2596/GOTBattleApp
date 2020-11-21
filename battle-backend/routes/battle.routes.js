const route = require('express').Router();
const battleController=require('../controller/battle.controller')

route.get("/list",battleController.getBattleList);
route.get("/count",battleController.getBattleCount);
route.get("/search",(req,res)=>{
    console.log(res.send("Searching Battles ,Attacker and many more.").sendStatus(200));
});

module.exports = route;