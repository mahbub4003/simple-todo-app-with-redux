import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
    todosReducer : todosReducer,
    filterReducer: filterReducer
})

export default rootReducer