import '../App.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField'
import { DataGrid } from '@mui/x-data-grid';

export default function MakeTeam(props) {
    const [open, setOpen] = React.useState(false);
    const [open_org, setOpen_org] = React.useState(false);
    const [org_name, setName] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen_org = () => {
        setOpen_org(true)
    }
    const handleClose_org = () => {
        fetch('http://localhost/api/organisation/', {
            method: 'POST',
            body: JSON.stringify ({
                name: org_name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
        setOpen_org(false)
    }
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
    const columns  = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'CoffeCoins',
            headerName: 'Coffee Coins',
            width: 160,
        },
    ];
    const rows = [
        {id: 1, fullName: 'Xi', CoffeCoins: 1374},
        {id: 2, fullName: 'Steven', CoffeCoins: 984},
        {id: 3, fullName: 'Donald', CoffeCoins: 2348}
    ]
    return (
        <div>
            <li><a href="#" onClick={handleOpen}>Создать команду</a></li>
            <li><a href="#" onClick={handleOpen_org}>Создать организацию</a></li>
            <Modal
                open={open_org}
                onClose={handleClose_org}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={handleClose_org} variant="contained" size="medium">
                        Создать организацию
                    </Button>
                    <TextField id="outlined-basic" onChange={(e) => {
                        setName(e.target.value)
                        props.setName(e.target.value)
                    }} label="Название организации" variant="outlined"/>
                </Box>
            </Modal>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" onChange={(e) => {
                        props.setName(e.target.value)
                    }} label="Название команды" variant="outlined"/>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 3,
                                },
                            },
                        }}
                        pageSizeOptions={[3]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        onRowSelectionModelChange={(e) => {
                            let res = []
                            for (let i = 0; i < e.length; i++) {
                                res.push(rows[e[i] - 1].fullName)
                            }
                            props.setRows(res)
                        }}
                    />
                    <Button onClick={handleClose} variant="contained" size="medium">
                        Создать команду
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}