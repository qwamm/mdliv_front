import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import MyProfile from './MyProfile.jsx'
import * as React from "react";

export default function Profile(pros) {
    const navigate = useNavigate();
    const auth = () => {navigate('/login');}
    if (pros.username === "Авторизация") {
        return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style = {{marginLeft: '600px'}}>
                Авторизация
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" onClick = {auth}>Войти</Dropdown.Item>
                <Dropdown.Item href="https://github.com/login/oauth/authorize?client_id=Iv23liDMCg3eeIfAIYy1&redirect_uri=http://127.0.0.1:8080/api/github/login/&scope=read:user">Войти через Github</Dropdown.Item>
                <Dropdown.Item href="https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=kpZForY3FmJ5SerZaGZnKf3Kz5I6qF4s&scope=read%3Aentitlements%3Afsag%20read%3Aentitlements%3Accg%20read%3Aapplication-role%3Ajira%20read%3Aaudit-log%3Ajira%20read%3Aavatar%3Ajira%20read%3Aproject.avatar%3Ajira%20read%3Adashboard%3Ajira%20read%3Adashboard.property%3Ajira%20read%3Afilter%3Ajira%20read%3Afilter.column%3Ajira%20read%3Afilter.default-share-scope%3Ajira%20read%3Agroup%3Ajira%20read%3Alicense%3Ajira%20read%3Aissue%3Ajira%20read%3Aissue-meta%3Ajira%20read%3Aattachment%3Ajira%20read%3Acomment%3Ajira%20read%3Acomment.property%3Ajira%20read%3Afield%3Ajira%20read%3Afield.default-value%3Ajira%20read%3Afield.option%3Ajira%20read%3Afield-configuration-scheme%3Ajira%20read%3Acustom-field-contextual-configuration%3Ajira%20read%3Afield-configuration%3Ajira%20read%3Afield.options%3Ajira%20read%3Aissue-link%3Ajira%20read%3Aissue-link-type%3Ajira%20read%3Anotification-scheme%3Ajira%20read%3Apriority%3Ajira%20read%3Aissue.property%3Ajira%20read%3Aissue.remote-link%3Ajira%20read%3Aresolution%3Ajira%20read%3Aissue-details%3Ajira%20read%3Aissue-security-scheme%3Ajira%20read%3Aissue-type%3Ajira%20read%3Aissue-type-scheme%3Ajira%20read%3Aissue-type-screen-scheme%3Ajira%20read%3Aissue-type.property%3Ajira%20read%3Aissue.watcher%3Ajira%20read%3Aissue-worklog%3Ajira%20read%3Aissue-worklog.property%3Ajira%20read%3Aissue-field-values%3Ajira%20read%3Aissue-security-level%3Ajira%20read%3Aissue-status%3Ajira%20read%3Aissue-type-hierarchy%3Ajira%20read%3Aissue-type-transition%3Ajira%20read%3Aissue.changelog%3Ajira%20read%3Aissue.vote%3Ajira%20read%3Aissue.transition%3Ajira&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&state=$%7BYOUR_USER_BOUND_VALUE%7D&response_type=code&prompt=consent">
                    Войти через Jira
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    } else {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style = {{left: '800px'}}>
                    {pros.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick ={()=> {
                        pros.setOpen(true)
                        navigate('/MyProfile')
                    }}>Мой профиль</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => {
                        fetch('http://localhost/api/auth/logout', {
                            method: 'POST',
                            headers: {
                                'accept': 'application/json'
                            },
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data);
                                // Handle data
                            })
                            .catch((err) => {
                                console.log(err.message);
                            });
                        pros.setUsername("Авторизация")
                        pros.setPoints(0)
                    }}>Выйти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}