import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS
} from './constants';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
}

export const requestData = (data) => (dispatch) => {
    if (data === 'robots') {
        dispatch({ type: REQUEST_ROBOTS.PENDING });
        getRobots(dispatch); // async way
        // ### Old / .Then way ###
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => dispatch({ type: REQUEST_ROBOTS.SUCCESS, payload: data}))
        //     .catch(error => dispatch({ type: REQUEST_ROBOTS.FAILED, payload: error}))
    }

   
}

async function getRobots (dispatch) {
    try {
        const respText = await fetch('https://jsonplaceholder.typicode.com/users');
        const respJson = await respText.json();
        await dispatch({ type: REQUEST_ROBOTS.SUCCESS, payload: respJson});
    } catch (err) {
        await dispatch({ type: REQUEST_ROBOTS.SUCCESS, payload: err});
    }
    
}