import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Authorization from "./components/Authorization.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Shop from "./components/Shop.jsx";
import {useState} from "react";

export default function App() {
        const [username, setUsername] = useState("Авторизация");
        console.log("FKJBSDJGB")
        return (
            <div>
                <TopBar username = {username} setUsername = {setUsername}></TopBar>
                <Routes>
                    <Route path = "/auth" element = {<Authorization setUsername = {setUsername}></Authorization>}></Route>
                    <Route path="/lb" element = {<Leaderboard/>}></Route>
                    <Route path="/shop" element = {<Shop/>}></Route>
                </Routes>
            </div>
        )
}

