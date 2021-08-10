import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {addPost, addPostType, ProfilePageType, updateNewPostText, updateNewPostTextType} from "../redax/state";

type ProfilePropsType = {
    profile:ProfilePageType
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
}

const ProFile:React.FC<ProfilePropsType> = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     profilePage={props.profile}/>
        </div>
    )
};

export default ProFile;
