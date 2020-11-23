import React, { Component } from 'react';
import BattleSerVice from "../services/battleApi.service";
import '/home/admin1/Desktop/BackEndProjects/GOTBattle-application/battle-frontend/src/App.css';
export class BattleCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            search: ''

        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            BattleSerVice.getBattles(this.props.message).then((data) => {
                console.log(data.data.data.data);
                this.setState({ cards: data.data.data.data })

            }).catch((err) => {
                console.log(err);
            })
        }
      }
    render() {

        var displayAllCards = this.state.cards.map((item, i) => {
            return (
                <div className="battleCard" key={i}>
                    <span className="card" >Battle Name:- <span className="name">{item.name}</span> </span>
                    <span className="card">Year :- <span className="year">{item.year}</span> </span>
                    <span className="card">Location :- <span className="location">{item.location}</span> </span>
                    <span className="card">Region:- {item.region}</span>
                    <span className="card">Battle Type:-{item.battle_type}</span>
                    <span className="card">Major Death:-{item.major_death}</span>
                    <span className="card">Major Capture:-{item.major_capture}</span>
                    <div className="warriors">
                        <div className="attack_warriors">
                            <span className="card attacker">Attacker</span>
                            <span >Attacker King :- <span className="name">{item.attacker_king}</span> </span>
                            <span>Commander:- {item.attacker_commander}</span>
                            <span>Attacker_1:- {item.attacker_1}</span>
                            <span>Attacker_2:- {item.attacker_2}</span>
                            <span>Attacker_3:- {item.attacker_3}</span>
                            <span>Attacker_4:- {item.attacker_4}</span>
                            <span>Attacker Size:-{item.attacker_size}</span>
                            <span>Attacker Outcome:-{item.attacker_outcome}</span>


                        </div>
                        <div className="defender_warriors">
                            <span className="card defender">Defender</span>
                            <span>Defender King:- <span className="name">{item.defender_king}</span></span>
                            <span>Commander:-{item.defender_commander}  </span>
                            <span>Defender 1:-{item.defender_1}</span>
                            <span>Defender 2:-{item.defender_2}</span>
                            <span>Defender 3:-{item.defender_3}</span>
                            <span>Defender 4:-{item.defender_4}</span>
                            <span>Defender Size:- {item.defender_size}</span>
                        </div>
                    </div>

                </div>

            );
        })

        return (
            <div className="battle_main">
                <h1>
                    Battles Of GOT
                </h1>
                <div className="displayCards">

                    {displayAllCards}
                </div>
            </div>
        )
    }
}