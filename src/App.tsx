import React from 'react';

import './App.css';
import Header from "./components/Header/header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settins from "./components/Settins/Settins";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/Profile/ProFile";
import {addPostType, RootStateType, updateNewPostTextType} from "./components/redax/state";
import Dialogs from "./components/Dialogs/Dialogs";


type AppPropsType = {
    state: RootStateType,
    addPost:addPostType,
    updateNewPostText:(newPost:string)=> void

}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wraper">
                <Header/>
                <NavBar/>
                <div className='app-wraper-content'>
                    <Route path="/profile"
                           render={() => < ProFile
                               // newPostText={props.state.profilePag}
                               profile={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}

                           />}
                           />
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogs={props.state.dialogsPage.dialogs}
                               messages={props.state.dialogsPage.messages}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settins" render={() => <Settins/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
