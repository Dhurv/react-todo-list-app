import { useState, createContext, useEffect } from "react";
import Todo from "./components/Todo";

export const UserContext = createContext();

function App() {
  //useState
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    console.log(todos)
  }, [todos])
 
  // functions
  function handleInputSumbit(){
    setTodos([
      ...todos,
      {
        id : Math.random(),
        name: input,
        completed : false
      }
    ])

    setInput("")
  }

  function handleInput(e) {
    // console.log(e.target.value)
    setInput(e.target.value)
  }
  

  return (
    <UserContext.Provider value={null}>
      <div>
        <h1></h1>
        <div className="flex items-center mt-7 flex-col">
          <div className="flex gap-4">
            {/* <form> */}
            <input
              type="text"
              placeholder="Dhrubajyoti"
              value={input}
              onChange={handleInput}
              className="shadow-sm border-2 w-100 h-16 focus:outline-none hover:shadow-lg font-mono px-3 text-3xl"
            />
            <button
              type="submit"
              onClick={handleInputSumbit}
              className=" bg-gradient-to-br from-green-600 to-teal-300 px-5 rounded-lg text-3xl font-mono hover:shadow-md hover:scale-105 "
            >
              ADD
            </button>
            {/* </form> */}
          </div>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
          ))}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
