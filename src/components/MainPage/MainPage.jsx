import '../../App.css'
import styles from './MainPage.module.css'
import star from "../../pictures/star.png";
import Profile from '../Profile.jsx'
import {useNavigate} from "react-router-dom";
export default function MainPage(pros) {
    const navigate = useNavigate();
    const lb = () => {navigate('/lb');}
    const shop = () => {navigate('/shop');}
    const main_page = () => {navigate('/');}
    return (
        <div style = {styles}>
        <header>
            <img src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"/>
            {pros.points}
            <nav>
                <ul>
                    <li><a href="#" onClick = {main_page}>Главная</a></li>
                    <li><a href="#" onClick = {lb}>Общий рейтинг</a></li>
                    <li><a href="#" onClick = {shop}>Магазин мерча</a></li>
                    <Profile username = {pros.username} setUsername = {pros.setUsername}></Profile>
                </ul>
            </nav>
        </header>
        </div>
    )
}