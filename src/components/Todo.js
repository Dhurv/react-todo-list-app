import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../App.js";

export default function Todo({ todos, todo, setTodos }) {
  const [checked, setChecked] = useState(todo.completed);
  const user = useContext(UserContext);

  function handleComplete() {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
      })
    );
  }

  function handleDelete() {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  return (
    <div>
      <>
        <div className="flex w-auto justify-start items-center gap-5 mt-3 p-3">
          <input
            className="font-mono text-gray-700 text-2xl cursor-pointer"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            onClick={() => handleComplete()}
          />
          <span>{user}</span>
          <span
            className={`font-mono ${
              checked ? "line-through" : "no-underline"
            }  text-gray-700 text-2xl`}
          >
            {todo.name}
          </span>
          <MdDelete onClick={handleDelete} className="font-mon text-2xl text-red-600 cursor-pointer" />
        </div>
      </>
    </div>
  );
}
