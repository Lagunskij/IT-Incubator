import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.wallpapersafari.com/90/38/thSvMq.jpg'/>
            </div>
            <div className={classes.descriptionBlok}>
                Avatar+description
            </div>
        </div>
    )
};

export default ProfileInfo;
