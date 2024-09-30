import '../App.css'
import star from "../pictures/star.png";
import Profile from './Profile.jsx'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ButtonGroup} from "react-bootstrap";

export default function TopBar(pros) {
    const [points, setPoints] = useState(0)
    const navigate = useNavigate();
    const lb = () => {navigate('/lb');}
    const shop = () => {navigate('/shop');}
    const main_page = () => {navigate('/')}
    const mstyle = {
    margin: 0,
    padding: 0}
    return (
        <div>
                <ButtonGroup aria-label="Basic example" className="topbar">
                <button type="button" className="subbutton" onClick = {main_page}>
                    Главная
                </button>
                <button type="button" className="subbutton" onClick = {lb}>
                    Общий рейтинг
                </button>
                <button type="button" className="subbutton" onClick = {shop}>
                    Мерч
                </button>
                </ButtonGroup>
            <div className="star">
                <img src={star}></img>
                <h3 className="points">{points}</h3>
            </div>

                <Profile username = {pros.username} setUsername = {pros.setUsername}></Profile>
        </div>
    )
}