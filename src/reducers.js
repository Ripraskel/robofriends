import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS
} from './constants';

const initialState = {
    searchField: '', 
    robots: {     
        isPending: false,
        robots: [],
        error: ''
    }
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

export const requestRobots = (state=initialState.robots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS.PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS.SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS.FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}