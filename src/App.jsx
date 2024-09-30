import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Authorization from "./components/Authorization.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Shop from "./components/Shop.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import {useState} from "react";

export default function App() {
        const [username, setUsername] = useState("Авторизация");
        const [points, setPoints] = useState(0);
        console.log(username)
        return (
            <div>
                {/*<TopBar username = {username} setUsername = {setUsername}></TopBar>*/}
                <MainPage points = {points} setPoints = {setPoints} username = {username} setUsername = {setUsername}></MainPage>
                <Routes>
                    <Route path = "/login" element = {<Authorization setUsername = {setUsername} setPoints = {setPoints}></Authorization>}></Route>
                    <Route path="/lb" element = {<Leaderboard/>}></Route>
                    <Route path="/shop" element = {<Shop/>}></Route>
                </Routes>
            </div>
        )
}

