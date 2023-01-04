import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/actionTypes";

export default function Header() {
    const dispach = useDispatch()
    const [todo, setTodo] = useState('')

    const allCompletHandler = ()=>{
          dispach(allCompleted())
    }
    const clearCompletHandler = ()=>{
        dispach(clearCompleted())
  }
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispach(added(todo))
    setTodo('')
  }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    value={todo}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span onClick={allCompletHandler}>Complete All Tasks</span>
                </li>
                <li onClick={clearCompletHandler} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
