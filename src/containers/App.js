import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import 'tachyons';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBondary';
import { setSearchField, requestData } from '../actions';
import {getFilteredList} from '../Common/Tools';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestData: (data) => dispatch(requestData(data))
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestData('robots');
    }

    render() {
        if (this.props.isPending){
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.props.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={getFilteredList(this.props.robots, this.props.searchField)} /> 
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);