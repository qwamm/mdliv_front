import '../App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import * as React from "react";

export default function ListOfOrganizations(pros) {
    const [data, setData] = useState([])
    const [organization, setOrganization] = useState("")
    const getOrg = () => {
        fetch('http://localhost/api/organisation/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.name)
                {
                    setOrganization(data.name)
                }
                //setData(data)
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        getOrg();
    }, []);
    const text_style = {
        left: '50%',
        top: '50%'
    }
    if (organization.length > 0  || pros.name !== "")
    {
        return (
            <div>
                <Paper elevation={3}>
                    <h1 style = {{backgroundColor: 'white',position: 'absolute', left: '25%', top: '20%'}}>Список участников организации {organization}</h1>
                    <DataTable value={data} tableStyle={{
                        minWidth: '50rem', position: 'absolute', bottom: '350px',
                        left: '400px', backgroundColor: 'white'
                    }} responsiveLayout="scroll">
                        <Column field="id" header="ID"></Column>
                        <Column field="name" header="ФИО"></Column>
                        <Column field="org" header="Состоит в организации"></Column>
                    </DataTable>
                </Paper>
            </div>
        )
    } else {
        const main_style = {
            bottom: '50%',
            left: '15%',
            position: 'absolute',
            fontFamily: 'Tahoma',
            fontWeight: 'bold',
            fontSize: '50px',
            lineHeight: '50px',
            background: 'white'
        }
        return (
            <div>
                <Typography style = {main_style} id="modal-modal-title" variant="h6" component="h2">
                    Вы не состоите ни в одной организации
                </Typography>
            </div>
        )
    }
}