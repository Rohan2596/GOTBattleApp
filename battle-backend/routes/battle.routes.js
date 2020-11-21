const route = require('express').Router();
const battleController=require('../controller/battle.controller')

route.get("/list",battleController.getBattleList);
route.get("/count",(req,res)=>{
    console.log(res.send("Getting Count of the total number of battles").sendStatus(200));
});
route.get("/search",(req,res)=>{
    console.log(res.send("Searching Battles ,Attacker and many more.").sendStatus(200));
});

module.exports = route;