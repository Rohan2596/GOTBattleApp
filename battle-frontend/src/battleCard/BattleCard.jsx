import React, { Component } from 'react';
import '/home/admin1/Desktop/BackEndProjects/GOTBattle-application/battle-frontend/src/App.css';
export class BattleCard extends Component {
 
    constructor(props){
        super(props)
        this.state={
            cards:[]
        }

    }


    render() {
      var  displayAllCards=this.state.cards.map((i)=>{
            return(
                <div className="battleCard" key={i}>
                <span>Battle Name</span>
                <span>Year</span>
                <span>Location</span>
                <span>Region</span>
                <span>Battle Type</span>
                <span>Major Death</span>
                <span>Major Capture</span>
                <div className="warriors">
                    <div className="attack_warriors">
                        <span>Attacker</span>
                        <span>Attacker King</span>
                        <span>Commander</span>
                        <span>Attacker Size</span>
                        <span>Attacker Outcome</span>


                    </div>
                    <div className="defender_warriors">
                        <span>Defender</span>
                        <span>Defender King</span>
                        <span>Commander  </span>
                        <span>Defender</span>
                        <span>Defender Size</span>

                        <span>Commander</span>
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