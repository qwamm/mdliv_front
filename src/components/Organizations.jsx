import '../App.css'
import ListOfOrganizations from "./ListOfOrganizations.jsx";
export default function Organizations(pros) {
     const getOrg = () => {
        fetch('http://localhost/api/organization/', {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
        return "MDLIV";
    }

    return (
        <div>
            <p className = 'orgs'>
                Ваша организация : {getOrg()}
            </p>
            <ListOfOrganizations name = {pros.name} setName = {pros.setName}></ListOfOrganizations>
        </div>
    )
}