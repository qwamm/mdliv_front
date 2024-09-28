import '../App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {useState} from "react";

export default function Leaderboard(pros) {
    const [products, setProducts] = useState([]);
   const data = [
       {id: 1, name: 'Иванов Иван Иваныч', credits: 67},
       {id: 2, name: "Товарищ Xi", credits: 999999999}
   ]
    return (
        <div>
            <h2 className="leaderboard">Общий рейтинг</h2>
            <DataTable value = {data} tableStyle={{ minWidth: '50rem', position : 'absolute', bottom: '50px',
            left: '400px'}} responsiveLayout="scroll">
                <Column field="id" header="ID"></Column>
                <Column field="name" header="ФИО"></Column>
                <Column field="credits" header="Кредиты" sortable></Column>
            </DataTable>
        </div>
    )
}