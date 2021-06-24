import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsPageType, DialogsType} from "../../redax/state";

const DialogItem = (props:DialogsType) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};





export default DialogItem;
