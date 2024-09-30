import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Profile(pros) {
    const navigate = useNavigate();
    const auth = () => {navigate('/auth');}
    if (pros.username === "Авторизация") {
        return (
            <div>
                <li><a href="/login">Авторизация</a></li>
                <li><a
                    href="https://github.com/login/oauth/authorize?client_id=Iv23liDMCg3eeIfAIYy1&redirect_uri=http://localhost:5173/&scope=read:user">Войти
                    через GitHub</a></li>
                <li><a
                    href="https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=kpZForY3FmJ5SerZaGZnKf3Kz5I6qF4s&scope=read:me&redirect_uri=http://localhost:5173/&response_type=code&prompt=consent">
                    Войти через Jira
                </a></li>
            </div>
        )
    } else {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {pros.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Мой профиль</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => {
                        pros.setUsername("Авторизация")
                        pros.setPoints(0)
                    }}>Выйти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}