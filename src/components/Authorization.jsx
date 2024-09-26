import '../App.css'

export default function Authorization()
{
    return (
        <div className="auth">
            <h2>Регистрация в командной системе</h2>
            <label className= "form">
                <input type="string" placeholder="Логин"/>
            </label>
            <label className= "form">
                <input type="string" placeholder="Пароль"/>
            </label>
            <button className="submit">
                Submit
            </button>
        </div>
    )
}