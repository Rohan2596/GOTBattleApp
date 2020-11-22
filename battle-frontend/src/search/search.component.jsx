import React,{ Component } from 'react';
import '/home/admin1/Desktop/BackEndProjects/GOTBattle-application/battle-frontend/src/App.css';
export class Search extends Component{

    render(){
        return(
            <div>
                <h1>
                    Games Of Thrones
                </h1>
                <div className="search_div">
                      
                      <input className="search_input" placeholder="Search the Battle"/>

                </div>
            </div>
        )
    }
}
