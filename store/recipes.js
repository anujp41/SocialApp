import firebase from '../firebase';

//Action Type
const ADD_INGREDIENT = 'ADD_INGREDIENT';

//Action Creators
addIngredients = ingredient => {
    const action = {type: ADD_INGREDIENT, ingredient};
    return action;
}

//THUNKS
export function addIngredientsThunk(ingredient) {
    return function(dispatch) {
        const key = firebase.database().ref('ingredients').push().key;
        firebase.database().ref('ingredients').child(key).update(ingredient);
        ingredient.key = key;
        dispatch(addIngredients(ingredient));
    }
}

//REDUCERS
export default (state = [], action) => {
    switch (action.type) {

        case ADD_INGREDIENT:
            return [...state, action.ingredient];

        default:
            return state;
    }
}