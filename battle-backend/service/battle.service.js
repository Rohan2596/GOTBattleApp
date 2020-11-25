const battleModel = require('../model/battle.model');
class BattleService {

/**
 * @Purpose : Service Logic for Getting battle list.
 * @author  : ROHAN KADAM    
 */
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
/**
 * @Purpose : Service Logic for Getting battle Count.
 * @author  : ROHAN KADAM    
 */
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
/**
 * @Purpose : Service Logic for Getting battle on search input.
 * @author  : ROHAN KADAM    
 */
    searchAll = (req, res, next) => {
        try {
            return battleModel.search(req).then((data) => {
                console.log(req);
                return data;
            }).catch((err) => {
                return err;
            })
        } catch (error) {
            next(error)
        }
    };
/**
 * @Purpose : Service Logic for Getting battle search Query.
 * @author  : ROHAN KADAM    
 */
    searchQuery = (req, res, next) => {
        try {
            return battleModel.getSearchQuery(req).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        } catch (error) {
            next(error)
        }
    }


}
module.exports = new BattleService();