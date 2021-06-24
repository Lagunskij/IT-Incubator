import React from 'react';
import classes from './Post.module.css';
import state, {PostType} from "../../../redax/state";




const Post = (props:PostType) => {

    return (
        <div className={classes.item}>
            <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
                 alt='ava'/>
            {props.message}

            <div>
                <span>Like</span>
                {props.likes}
            </div>
        </div>
    )
};
export default Post;
