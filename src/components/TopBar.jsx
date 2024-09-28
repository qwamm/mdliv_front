import '../App.css'
import star from "../assets/star.png";
import Profile from './Profile.jsx'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function TopBar(pros) {
    const [points, setPoints] = useState(0)
    const navigate = useNavigate();
    const lb = () => {navigate('/lb');}
    const shop = () => {navigate('/shop');}
    const main_page = () => {navigate('/')}
    return (
        <div>
            <div className="topbar">
                <button type="button" className="subbutton" onClick = {main_page}>
                    Главная
                </button>
                <button type="button" className="subbutton" onClick = {lb}>
                    Общий рейтинг
                </button>
                <button type="button" className="subbutton" onClick = {shop}>
                    Мерч
                </button>
            </div>
            <div className="star">
                <img src={star}></img>
                <h3 className="points">{points}</h3>
            </div>

                <Profile username = {pros.username} setUsername = {pros.setUsername}></Profile>
        </div>
    )
}