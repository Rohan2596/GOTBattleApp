import React, { Component } from 'react';
import { BattleCard } from '../battleCard/BattleCard';
import '../../src/App.css';
export class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            message: ''
        }
    }
    onChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    onSearch = () => {
        console.log(this.state.search);
        document.getElementById('Search').value = ''
        if (this.state.search === '') {

            console.log("No Value");
        }
        if (this.state.search !== '') {
            this.setState({ message: this.state.search })
            this.setState({
                search: '',
            })
        }


    }
    render() {
        return (
            <div className="search_main">
                <h1>
                    Games Of Thrones
                </h1>
                <div className="search_div">

                    <input id="Search" className="search_input" placeholder="Search the Battle" value={this.state.search} onChange={(event) => this.onChangeSearch(event)} />
                    <button id="searchButton" className="search_button" onClick={this.onSearch}>Search</button>

                </div>
                <BattleCard message={this.state.message} />
            </div>
        )
    }
}
