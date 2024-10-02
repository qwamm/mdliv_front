import '../../App.css'
import styles from './MainPage.module.css'
import Profile from '../Profile.jsx'
import MakeTeam from "../MakeTeam.jsx";
import {useNavigate} from "react-router-dom";
import Leaderboard from "../Leaderboard.jsx";
import * as React from "react";
export default function MainPage(pros) {
    const navigate = useNavigate();
    const [rows, setRows] = React.useState("");
    const shop = () => {
        pros.setOrg(false)
        document.body.style.backgroundImage = "none"
        navigate('/shop');
    }
    const main_page = () => {
        pros.setOrg(false)
        navigate('/');
    }
    const orgs = () => {
        if(pros.username !== "Авторизация")
        {
            pros.setOrg(true)
            document.body.style.backgroundImage = "url('https://i.ibb.co/pxpP9gZ/pikachu.jpg')"
            navigate('/organizations');
        }
        else
        {
            alert("Вы не авторизованы. Для просмотра списка организаций требуется авторизация.")
        }
    }
    const make_team = () => {
        document.body.style.backgroundImage = "url('https://i.ibb.co/pxpP9gZ/pikachu.jpg')"
        navigate('/organizations/make_team');
    }
    if (!pros.org) {
        return (
            <div style={styles}>
                <header>
                    <img src="https://www.shutterstock.com/image-vector/coffee-tea-cup-mug-evaporation-600nw-2471569515.jpg"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <Leaderboard></Leaderboard>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <li><a href="#" onClick={orgs}>Организации</a></li>
                            <Profile username={pros.username} setUsername={pros.setUsername} setPoints = {pros.setPoints}></Profile>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
    else {
        return (
            <div style={styles}>
                <header>
                    <img src="https://www.shutterstock.com/image-vector/coffee-tea-cup-mug-evaporation-600nw-2471569515.jpg"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <Leaderboard></Leaderboard>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <MakeTeam setName = {pros.setName} setRows = {setRows}></MakeTeam>
                            <Profile open = {pros.open} setOpen = {pros.setOpen} username={pros.username} setUsername={pros.setUsername} setPoints = {pros.setPoints}></Profile>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}