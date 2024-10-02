import '../App.css'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function MyProfile(pros) {
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const [tg_name, setTg] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        fetch('http://localhost/api/telegram/set_username', {
            method: 'POST',
            body: {tg_name},
            headers: {
                'Content-type': "application/json",
                "accept" : "application/json"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                //setData(data)
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
        setOpen(false);
    }
    return (
        <Modal
            open={pros.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField id="outlined-basic" onChange={(e) => {
                   setTg(e.target.value)
                }} label="Введите свой ник в телеграме" variant="outlined"/>
                <Button onClick={handleClose} variant="contained" size="medium">
                    Добавить ник
                </Button>
            </Box>
        </Modal>
    )
}