import '../App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {DataGrid} from "@mui/x-data-grid";
import {Typography} from "@mui/material";

export default function Leaderboard(pros) {
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
            field: 'Rate',
            headerName: 'Rate',
            width: 160,
        },
    ];
    const rows = [
        {id: 1, fullName: 'Xi', Rate: 1374},
        {id: 2, fullName: 'Steven', Rate: 984},
        {id: 3, fullName: 'Donald', Rate: 2348}
    ]
    return (
        <div>
            <li><a href="#" onClick={handleOpen}>Общий рейтинг</a></li>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Общий рейтинг
                    </Typography>
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
                </Box>
            </Modal>
        </div>
    )
}