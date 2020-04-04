import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import 'tachyons';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBondary';

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    getFilteredList = () => {
        return (
            this.state.robots.filter(robot => {
                return (
                robot.name.toLocaleLowerCase().includes(
                    this.state.searchField.toLocaleLowerCase())
                )
            })
        );
    }

    render() {
        if (this.state.robots.length === 0){
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={this.getFilteredList()} /> 
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;