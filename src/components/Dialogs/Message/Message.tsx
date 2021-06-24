import React from 'react';
import classes from './../Dialogs.module.css';
import {DialogsPageType, MessagesType, RootStateType} from "../../redax/state";


const Message = (props:MessagesType) => {


    return (
        <div className={classes.message}>{props.message}</div>
    )
};






export default Message;
