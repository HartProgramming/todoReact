import React from "react";
import classes from './Header.module.css';

const Header = () => {

    return(
        <div className={classes.headerdiv}>
            <h1 className={classes.header}>ToDo List</h1>
        </div>
    )
}

export default Header;