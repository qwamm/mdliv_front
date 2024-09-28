import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Profile(pros) {
    const navigate = useNavigate();
    const auth = () => {navigate('/auth');}
    if (pros.username === "Авторизация") {
        return (
            <div className = "title">
                <button type="button" className="gitLog" onClick={auth}>
                    Авторизация
                </button>
                <a href="https://github.com/login/oauth/authorize?client_id=Iv23liDMCg3eeIfAIYy1&redirect_uri=http://localhost:5173/&scope=read:user">
                    <button type="button" className="gitLog">Log in via github</button>
                </a>
            </div>
    )
    } else {
        return (
            <Dropdown className = "title">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {pros.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Мой профиль</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick = {() => {pros.setUsername("Авторизация")}}>Выйти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}