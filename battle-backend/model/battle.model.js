const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'year': {
        type: Number,
        required: true
    },
    'battle_number': {
        type: Number,
        required: true
    },
    'attacker_king': {
        type: String,
        required: true
    },
    'defender_king': {
        type: String,
        required: true
    },
    'attacker_1': {
        type: String,
        required: true
    },
    'attacker_2': {
        type: String,
        required: true
    },

    'attacker_3': {
        type: String,

    },

    'attacker_4': {
        type: String,

    },

    'defender_1': {
        type: String,

    },

    'defender_2': {
        type: String,

    },

    'defender_3': {
        type: String,

    },

    'defender_4': {
        type: String,

    },

    'attacker_outcome': {
        type: String,
        required: true
    },

    'battle_type': {
        type: String,
        required: true
    },

    'major_death': {
        type: Number,
        required: true
    },
    'major_capture': {
        type: Number,
        required: true
    },

    'attacker_size': {
        type: Number,
        required: true
    },
    'defender_size': {
        type: Number,
        required: true
    },
    'attacker_commander': {
        type: String,
        required: true
    },
    'defender_commander': {
        type: String,
        required: true
    },
    'summer': {
        type: Number,
        required: true
    },
    'location': {
        type: String,
        required: true
    },
    'region': {
        type: String,
        required: true
    },
    'note': {
        type: String,
    },

})
const battleModel = mongoose.model("battle", battleSchema, "battle");
class BattleModel {

    getBattleList = (next) => {
        try {
            return new Promise((resolve, reject) => {
                battleModel.find()
                    .then(result => {
                        if (result) {
                            let i = 0;
                            const data = [];
                            for (i = 0; i < result.length; i++) {
                                data[i] = result[i].location;
                            }
                            resolve({ message: "Battles Found are :- ", data: data })

                        } else {
                            reject({ message: "No Battle Found!", data: [] })
                        }

                    }).catch(err => {
                        reject(err)
                    })
            })
        } catch (error) {
            next(error);
        }
    };
    getTotalBattleCount = (next) => {
        try {
            return new Promise((resolve, reject) => {
                battleModel.find()
                    .then(result => {
                        if (result) {

                            resolve({ message: "Battles Count are :- ", data: result.length })

                        } else {
                            reject({ message: "No Battles Found!", data: 0 })
                        }

                    }).catch(err => {
                        reject(err)
                    })
            })
        } catch (error) {
            next(error);
        }
    };
    search = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                battleModel.find(
                    {}, {
                    name: /req/,
                    year: /req/,
                    battle_number: /req/,
                    attacker_king: /req/,
                    defender_king: /req/,
                    attacker_1: /req/,
                    attacker_2:/req/,
                    attacker_3:/req/,
                    attacker_4:/req/,
                    defender_1:/req/,
                    defender_2:/req/,
                    defender_3:/req/,
                    defender_4:/req/,
                    attacker_outcome:/req/,
                    battle_type:/req/,
                    major_death:/req/,
                    major_capture:/req/,
                    attacker_size: /req/,
                    defender_size: /req/,
                    attacker_commander:/req/,
                    defender_commander:/req/,
                    summer:/req/,
                    location:/req/,
                    region: /req/,
                    note: /req/
                }
                )
                    .then(result => {
                        if (result) {
                               console.log(result.length);
                            resolve({ message: "Battles Found are :- ", data: result })

                        } else {
                            reject({ message: "No Battles Found!", data: 0 })
                        }

                    }).catch(err => {
                        reject(err)
                    })
            })
        } catch (error) {
            next(error);
        }
    }

}
module.exports = new BattleModel();