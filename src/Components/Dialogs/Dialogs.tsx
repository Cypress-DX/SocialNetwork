import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number
}

type MessageContent = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "./" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageContent) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Alexandr"},
        {id: 2, name: "Veniamin"},
        {id: 3, name: "Elizaveta"},
        {id: 4, name: "Vikor"},
        {id: 5, name: "Nikolay"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your IT progress?"},
        {id: 3, message: "See you soon"},
        {id: 3, message: "You are doing great"},
        {id: 3, message: "Don't give up"}
    ]

    let dialogElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages
        .map((m) => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}