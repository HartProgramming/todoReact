import React, { useEffect, useState } from "react";
import classes from "./Entry.module.css";

const Entry = (props) => {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([]);

  const ChangeToDoHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const ToDoData = () => {
    arr.push(todo);
    console.log(arr);
    props.data(todo);
    setTodo("");
  };

  return (
    <div className={classes.div}>
      <input
        className={classes.input}
        value={todo}
        type="text"
        onChange={ChangeToDoHandler}
      ></input>
      <button className={classes.button} onClick={ToDoData}>
        Add ToDo
      </button>
    </div>
  );
};

export default Entry;
