import {useState} from "react";
import star from "../assets/star.png";
import '../App.css'

export default function Points() {
    const [points, setPoints] = useState(0)
    return (
        <div className="star">
            <img src={star}></img>
            <h3 className="points">{points}</h3>
        </div>
    )
}