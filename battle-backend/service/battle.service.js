const battleModel = require('../model/battle.model');
class BattleService {
    getBattleList = (next) => {
        try {
            return battleModel.getBattleList().then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        } catch (error) {
            next(error)
        }
    };
    getBattleCount = (next) => {
        try {
            return battleModel.getTotalBattleCount().then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        } catch (error) {
            next(error)
        }
    };
    searchQuery = (req, res, next) => {
        try {

        } catch (error) {
            next(error)
        }
    }


}
module.exports = new BattleService();