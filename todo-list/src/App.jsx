import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import TodoItem from "./components/todo-item/index";
import "./App.css";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material"

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      console.log(result);

      if (result?.todos ?? result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some error occured");
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrenTodoId) {
    console.log(getCurrenTodoId);

    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrenTodoId}`
      );
      const details = await apiResponse.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }

      console.log(details);
    } catch (error) {}
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if(loading) return <Skeleton variant="rectangulat" width={650} height={650}/>

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.headerTitle}>Simple Todo App Using Material UI</h1>
      <div className={styles.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
