import React, { useState } from "react";
import classes from './ListItem.module.css';

const ListItem = (props) => {

    const [remove, setDelete] = useState(false);

    const DeleteTodo = (e) => {
        console.log(e)
        setDelete(true)
    }

    return(
        <div className={classes.div}>
            <h4>{props.h4}</h4>
            <button onClick={DeleteTodo}>Delete</button>
        </div>
    )
}

export default ListItem;