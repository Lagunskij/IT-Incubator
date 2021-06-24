import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfilePageType} from "../redax/state";

type ProfilePropsType = {
    profile:ProfilePageType
}

const ProFile:React.FC<ProfilePropsType> = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}/>
        </div>
    )
};

export default ProFile;
