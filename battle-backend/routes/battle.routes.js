const route = require('express').Router();
const battleController = require('../controller/battle.controller')

route.get("/list", battleController.getBattleList);
route.get("/count", battleController.getBattleCount);
route.get("/search/:search", battleController.searchingAll);

module.exports = route;