import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actions";
import initialState from "./initialState";

const maxId = (state)=>{
    const lastId = state.reduce((total, cur)=>Math.max(cur.id),-1)
    return lastId + 1
 }


const reducer = ( state = initialState, action)=>{
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    id :maxId(state),
                    text : action.payload
                }
            ]
            case TOGGLED:
                return state.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo
                    }
                    return {
                        ...todo,
                        completed : !todo.completed
                    }
                })
            case COLORSELECTED:
                const {todoId, color} = action.payload
                return state.map((todo)=>{
                    if(todo.id !== todoId){
                        return todo
                    }
                    return{
                        ...todo,
                        color : color
                    }
                })
             case DELETED:
                return state.filter((todo)=> todo.id !== action.payload)
           case ALLCOMPLETED:
                return state.map(todo =>{
                    return{
                        ...todo,
                        completed : true
                    }
                })
         case CLEARCOMPLETED:
                return state.filter((todo)=> !todo.completed)
        default:
            return state
    }
}

export default reducer