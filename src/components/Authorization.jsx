import '../App.css'
import {useState} from "react";

export default function Authorization()
{
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    // Handling the email change
    const handleLogin = (e) => {
        setLogin(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify({
                'login' : login,
                'password': password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
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
    };

    return (
        <div className="auth">
            <h2 style = {{position : "absolute", left: "25px", bottom : "110px"}}>Авторизация</h2>
            <form className="form">
                <input className="form" type="text" placeholder="Логин" onChange={handleLogin} id="login"/>
                <input className="form" type="text" placeholder="Пароль" onChange={handlePassword} id="password"/>
                <button type="submit" className="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}