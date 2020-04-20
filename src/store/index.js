import { createStore, combineReducers } from "redux";
import personReducer from "./reducers/personReducer"
import gameReducer from "./reducers/gameReducer"




const AllReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
});

const InitialState = {
    game: {name: 'Football'},
    person: {name: 'Kabir'}
}
const store = createStore(AllReducers,InitialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store