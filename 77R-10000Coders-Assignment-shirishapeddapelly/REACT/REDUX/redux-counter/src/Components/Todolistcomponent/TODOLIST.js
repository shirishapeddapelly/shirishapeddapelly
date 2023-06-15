import { TodoListComponent } from "./TodoListComponent";
import { Todos } from "./Todos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../redux-components/action -creators/ActionCreatersForTodoList";

//import WeatherComponent from "./Components/WeatherComponent/WeatherComponent";
function TODOLIST() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.TodoListReducer);
  // update form visibility state
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // editTodo state
  const [editTodo, setEditTodo] = useState("");

  // this function will trigger when someone clicks the edit icon
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  // back button click
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <br></br>
        <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>

        <TodoListComponent
          editFormVisibility={editFormVisibility}
          editTodo={editTodo}
          cancelUpdate={cancelUpdate}
        />
        <Todos
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />
        {todos.length > 1 && (
          <button onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
        )}
      </div>
    </div>
  );
}

export default TODOLIST;
