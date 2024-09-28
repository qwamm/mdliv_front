import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Authorization from "./components/Authorization.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Shop from "./components/Shop.jsx";

export default function App() {
        return (
            <div>
                <Routes>
                    <Route path="/" element = {<TopBar/>}></Route>
                    <Route path = "/auth" element = {<Authorization/>}></Route>
                    <Route path="/lb" element = {<Leaderboard/>}></Route>
                    <Route path="/shop" element = {<Shop/>}></Route>
                </Routes>
            </div>
        )
}

