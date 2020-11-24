import axios from 'axios';
import { apiUrl,getSearch } from "../services/constant";
export default class BattleService {

    getBattles = (search) => {
        return axios({
            method: "GET",
            url: `${apiUrl}${getSearch}` + search ,
        });
    }
    



}