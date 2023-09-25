import React from 'react';
import {Table} from "react-bootstrap";
import Junior from "./sous-components/TableauJunior"

// site déployé : https://tp1-web2-sm-tr.vercel.app/
// https://www.syncfusion.com/forums/166256/custom-number-separators-thousand-and-decimal
class Tableau extends React.Component {

    state = {
        listElements : [
            {modele: "Skidoo", marque:"Summit", prix: 14799},
            {modele: "Skidoo", marque:"Freeride", prix: 19699},
            {modele: "Skidoo", marque:"Freeride", prix:  11849},
            {modele: "Skidoo", marque:"Expedition", prix: 11899},
            {modele: "Skidoo", marque:"Expedition", prix: 12349},
            {modele: "Skidoo", marque:"Expedition", prix:  10949},
        ]
    }
    render() {
        return (
            <div>
                <h1>Tableau d'évènements</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Modele</th>
                        <th>Marque</th>
                        <th>Prix</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.listElements.map((elem, index) => {
                       return(
                           <Junior key={index}  modele={elem.modele} marque={elem.marque} prix={ new Intl.NumberFormat('fr-CA').format(elem.prix)  }/>
                       )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default Tableau;