import firebase from '../firebase';

//Action Type
const GET_USERS = 'GET_USERS';

//Action Creators
getUsers = users => {
    const action = {type: GET_USERS, users};
    return action;
}

//THUNKS
export function getUsersThunk() {
    return function(dispatch) {
        firebase.database().ref().once('value')
            .then(snapshot => dispatch(getUsers(snapshot.val())))
            .catch(error => console.log(error))
    }
}

//REDUCERS
export default (state = [], action) => {
    switch (action.type) {

        case GET_USERS:
            return action.users;

        default:
            return state;
    }
}