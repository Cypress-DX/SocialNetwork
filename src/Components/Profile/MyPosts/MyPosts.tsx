import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi! How are you?", likesCount: 4},
        {id: 2, message: "It's my first post", likesCount: 3},
        {id: 3, message: "Wohoo, I won the race", likesCount: 30},
        {id: 4, message: "I feel awesome today", likesCount: 0}
    ]

    let postElement = posts
        .map( (p) => <Post message={p.message} likesCount={p.likesCount}/> );
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElement}
            </div>

        </div>
    )
}