import '../../App.css'
import styles from './MainPage.module.css'
import Profile from '../Profile.jsx'
import MakeTeam from "../MakeTeam.jsx";
import {useNavigate} from "react-router-dom";
import Leaderboard from "../Leaderboard.jsx";
export default function MainPage(pros) {
    const navigate = useNavigate();
    const lb = () => {navigate('/lb');}
    const shop = () => {navigate('/shop');}
    const main_page = () => {navigate('/');}
    const orgs = () => {
        if(pros.username !== "Авторизация")
        {
            pros.setOrg(true)
            navigate('/organizations');
        }
        else
        {
            alert("Вы не авторизованы. Для просмотра списка организаций требуется авторизация.")
        }
    }
    const make_team = () => {
        navigate('/organizations/make_team');
    }
    if (!pros.org) {
        return (
            <div style={styles}>
                <header>
                    <img src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <Leaderboard></Leaderboard>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <li><a href="#" onClick={orgs}>Организации</a></li>
                            <Profile username={pros.username} setUsername={pros.setUsername}></Profile>
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
                    <img src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <Leaderboard></Leaderboard>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <MakeTeam></MakeTeam>
                            <Profile username={pros.username} setUsername={pros.setUsername}></Profile>
                            <></>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}