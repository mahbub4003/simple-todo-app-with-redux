import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector(state => state.todosReducer)
    const filters = useSelector(state => state.filterReducer)
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter((todo)=>{
                const {status} = filters
                switch (status) {
                    case 'Complete':
                        
                       return todo.completed
                     case 'Incomplete':
                        
                       return !todo.completed
                
                    default:
                        return true
                }
            })
            .filter((todo)=>{
                const {colors} = filters
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                return true
            })
            .map((todo)=>{
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    );
}
