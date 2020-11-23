const axios = require('axios');
const {apiUrl,getSearch}=require('../services/constant');


class BattleService {

    getBattles = (search) => {
        return axios({
            method: "GET",
            url: `${apiUrl}${getSearch}` + search ,
        });
    };
    



}
module.exports=new BattleService();