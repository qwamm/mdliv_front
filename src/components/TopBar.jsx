import '../App.css'

export default function TopBar() {
    return (
        <div>
        <button type="button" className="title">
            Авторизация
        </button>
        <div className="topbar">
            <button type="button" className="subbutton">
            Описание
            </button>
            <button type="button" className="subbutton">
            Общий рейтинг
            </button>
            <button type="button" className="subbutton">
            Мерч
            </button>
        </div>
        </div>
)
}