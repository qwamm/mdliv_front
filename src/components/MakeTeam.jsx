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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Название команды" variant="outlined"/>
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
                    />
                    <Button variant="contained" size="medium">
                        Создать команду
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}