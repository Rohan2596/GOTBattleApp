const route = require('express').Router();


route.get("/list",(req,res)=>{
    console.log(res.send("Getting list(array) of all the places where the battle has taken place.").sendStatus(200));
})
route.get("/count",(req,res)=>{
    console.log(res.send("Getting Count of the total number of battles").sendStatus(200));
});
route.get("/search",(req,res)=>{
    console.log(res.send("Searching Battles ,Attacker and many more.").sendStatus(200));
});

module.exports = route;