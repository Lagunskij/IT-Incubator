import React from 'react';
import { PostType } from '../../redax/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
    posts:Array<PostType>
}


const MyPosts:React.FC<MyPostsPropsType> = (props) => {


let postsElement = props.posts
    .map(p => <Post key={p.id} id={p.id} massege={p.message} likes={p.likes}/>)

    return (
        <div className={classes.postsBlok}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div/>
            </div>
            <div className={classes.posts}>
                {postsElement}

            </div>
        </div>
    )
};
export default MyPosts;
