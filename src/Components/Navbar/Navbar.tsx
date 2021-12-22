import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"

const isActive = (x:{isActive:boolean}) => {
    if (x.isActive) {
        return classes.activeLink
    }
    else {
        return ""
    }
}

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={isActive}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/" className={isActive}>Messsages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={isActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={isActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={isActive}>Settings</NavLink>
            </div>
        </nav>
    )
}