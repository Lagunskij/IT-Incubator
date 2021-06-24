import React from 'react';

import './App.css';
import Header from "./components/Header/header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settins from "./components/Settins/Settins";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/Profile/ProFile";
import {RootStateType} from "./components/redax/state";
import Dialogs from "./components/Dialogs/Dialogs";

type AppPropsType = {
    state: RootStateType
}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wraper">
                <Header/>
                <NavBar/>
                <div className='app-wraper-content'>
                    <Route path="/profile"
                           render={() => <ProFile profile={props.state.profilePage}  />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages} />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settins" render={() => <Settins/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
