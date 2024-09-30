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
    const orgs = () => {
        if(pros.username !== "Авторизация")
        {
            pros.setOrg(true)
            navigate('/organizations');
        }
        else
        {
            alert("Вы не авторизованы. Для просмотра списка организаций требуется авторизация.")
        }
    }
    const org_list = () => {

    }
    if (!pros.org) {
        return (
            <div style={styles}>
                <header>
                    <img src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <li><a href="#" onClick={lb}>Общий рейтинг</a></li>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <li><a href="#" onClick={orgs}>Организации</a></li>
                            <Profile username={pros.username} setUsername={pros.setUsername}></Profile>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
    else {
        return (
            <div style={styles}>
                <header>
                    <img src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"/>
                    {pros.points}
                    <nav>
                        <ul>
                            <li><a href="#" onClick={main_page}>Главная</a></li>
                            <li><a href="#" onClick={lb}>Общий рейтинг</a></li>
                            <li><a href="#" onClick={shop}>Магазин мерча</a></li>
                            <li><a href="#" onClick={org_list}>Список организаций</a></li>
                            <li><a href="#" onClick={make_team}>Создать команду</a></li>
                            <Profile username={pros.username} setUsername={pros.setUsername}></Profile>
                            <></>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}