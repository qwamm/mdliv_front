import '../App.css'
import star from "../assets/star.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function TopBar(pros) {
    const [points, setPoints] = useState(0)
    const navigate = useNavigate();
    const auth = () => {navigate('/auth');}
    const lb = () => {navigate('/lb');}
    const shop = () => {navigate('/shop');}
    return (
        <div>
            <div className="topbar">
                <button type="button" className="subbutton">
                    Описание
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
            <div className = "title">
                <button type="button" className="gitLog" onClick={auth}>
                    Авторизация
                </button>
                <a href="https://github.com/login/oauth/authorize?client_id=Iv23liDMCg3eeIfAIYy1&redirect_uri=http://localhost:5173/&scope=read:user">
                    <button type="button" className="gitLog">Log in via github</button>
                </a>
            </div>
        </div>
    )
}