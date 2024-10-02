import '../App.css'
import {Typography} from "@mui/material";
import * as React from "react";

export default function AboutProject() {
    const title_style = {
        bottom: '50%',
        left: '65%'
    }
    const main_style = {
        bottom: '60%',
        left: '30%'
    }
    return (
        <div>
            <Typography style = {main_style} className = "transparent"  id="modal-modal-title" variant="h5" component="h2">
                Чтобы выигрывать, прежде всего нужно играть.
            </Typography>
            <Typography style = {title_style} className = "transparent"  id="modal-modal-title" variant="h6" component="h2">
                -Альберт Эйнштейн
            </Typography>
        </div>
    )
}