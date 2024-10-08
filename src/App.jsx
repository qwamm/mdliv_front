import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Authorization from "./components/Authorization.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Shop from "./components/Shop.jsx";
import MyProfile from "./components/MyProfile.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Organizations from './components/Organizations.jsx'
import MakeTeam from "./components/MakeTeam.jsx";
import AboutProject from "./components/AboutProject.jsx";
import {useState} from "react";
import * as React from "react";

export default function App() {
        const [username, setUsername] = useState("Авторизация");
        const [points, setPoints] = useState(0);
        const [org,setOrg] = useState(false);
        const [name, setName] = React.useState("");
        const [open, setOpen] = React.useState(false);
        console.log(username)
        return (
            <div>
                {/*<TopBar username = {username} setUsername = {setUsername}></TopBar>*/}
                <MainPage open = {open} setOpen = {setOpen} name = {name} setName = {setName} org = {org} setOrg = {setOrg} points = {points} setPoints = {setPoints} username = {username} setUsername = {setUsername}></MainPage>
                <Routes>
                    <Route path = "/" element = {<AboutProject/>}></Route>
                    <Route path = "/login" element = {<Authorization setUsername = {setUsername} setPoints = {setPoints}></Authorization>}></Route>
                    <Route path="/lb" element = {<Leaderboard> </Leaderboard>}></Route>
                    <Route path="/shop" element = {<Shop/>}></Route>
                    <Route path = "/organizations" element = {<Organizations name = {name} setName = {setName}> </Organizations>}></Route>
                    <Route path = '/organizations/make_team' element = {<MakeTeam/>}></Route>
                    <Route path = "/my_profile" element = {<MyProfile open = {open} setOpen = {setOpen}></MyProfile>}></Route>
                </Routes>
            </div>
        )
}

