import React, {ChangeEvent,KeyboardEvent} from 'react';
import {addPostType, PostType, ProfilePageType, updateNewPostTextType} from '../../redax/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
    profilePage: ProfilePageType
    posts: Array<PostType>
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const textPost: string = props.profilePage.newPost
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const postsElement = props.posts
        .map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = () => {
        props.addPost()
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addPost()
    }

    return (
        <div className={classes.postsBlok}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input value={textPost} onChange={onChangeInputHandler} onKeyPress={onKeyHandler}/>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
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
