import '../App.css'
import ListOfOrganizations from "./ListOfOrganizations.jsx";
export default function Organizations(pros) {
     const getOrg = () => {
    //     fetch('http://localhost:8080/api/auth/', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             'username' : login,
    //             'password': password,
    //             'password_again': password
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             // Handle data
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    return "MDLIV";
    }

    return (
        <div>
            <p className = 'orgs'>
                Ваша организация : {getOrg()}
            </p>
            <ListOfOrganizations></ListOfOrganizations>
        </div>
    )
}