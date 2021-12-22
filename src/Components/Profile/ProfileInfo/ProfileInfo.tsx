import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Demre_mira.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava and some description
            </div>
        </div>
    )
}