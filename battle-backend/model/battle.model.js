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
                            let i=0;
                            const data=[];
                            for (i = 0; i < result.length; i++) {
                                data[i]= result[i].location;
                              }
                              console.log(data.length ,data[0]);
                            resolve({ message:"Battles Found are :- ",data: data })

                        } else {
                            reject({message:"No Battle Found!"  ,data: []})
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