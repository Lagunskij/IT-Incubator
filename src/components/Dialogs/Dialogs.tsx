import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../redax/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const Dialogs:React.FC<DialogsPropsType> = (props) => {


    let gialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let massegesElements = props.messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {gialogsElements}
            </div>
            <div className={classes.messages}>
                {massegesElements}
            </div>
        </div>
    )
};


export default Dialogs;
