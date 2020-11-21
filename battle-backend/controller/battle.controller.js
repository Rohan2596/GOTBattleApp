const battleService = require('../service/battle.service');

class BattleController {

    getBattleList = (req,res, next) => {
        try {
            const response = {}
            battleService.getBattleList().then((data) => {
                response.success = true;
                response.message = data.message;
                response.data = data.data;
                response.error = ""
                return res.status(200).send(response);

            }).catch((error) => {
                response.success = false;
                response.message = data.message;
                response.data = data.data;
                response.error = ""
                return res.status(400).send(response);

            })
        } catch (error) {
            console.log(error);

            next(error)
        }
    };
    getBattleCount = (req,res, next) => {
        try {
            const response = {}
            battleService.getBattleCount().then((data) => {
                response.success = true;
                response.message = data.message;
                response.data = data.data;
                response.error = ""
                return res.status(200).send(response);

            }).catch((error) => {
                console.log(error);
                response.success = false;
                response.message = data.message;
                response.data = data.data;
                response.error = error
                return res.status(400).send(response);

            })
        } catch (error) {
            next(error)
        }
    };
    search = (req, res, next) => {
        try {
            const response = {}
            response.success = true;
            response.message = "Searching battle and amy more";
            response.data = req.query;
            response.error = ""
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }
    };



};
module.exports = new BattleController();