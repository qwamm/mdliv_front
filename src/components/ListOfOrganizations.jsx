import '../App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ListOfOrganizations(pros) {
   const data = [
       {id: 1, name: 'Иванов Иван Иваныч', credits: 67, org: 'Versus'},
       {id: 2, name: "Товарищ Xi", credits: 999999999, org: "-"}
   ]
    return (
        <div>
            <h2 className="leaderboard">Список участников</h2>
            <DataTable value = {data} tableStyle={{ minWidth: '50rem', position : 'absolute', bottom: '450px',
            left: '400px', backgroundColor: 'white'}} responsiveLayout="scroll">
                <Column field="id" header="ID"></Column>
                <Column field="name" header="ФИО"></Column>
                <Column field="credits" header="Кредиты" sortable></Column>
                <Column field="org" header="Состоит в организации"></Column>
            </DataTable>
        </div>
    )
}