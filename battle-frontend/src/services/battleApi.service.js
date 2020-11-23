const axios = require('axios');
const {apiUrl,getSearch}=require('../services/constant');


class BattleService {

    getBattles = () => {
        return axios({
            method: "GET",
            url: `${apiUrl}${getSearch}` + "Rob" ,
        });
    };
    



}
module.exports=new BattleService();