import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Junior from "./sous-components/TableauJunior"

function Tableau () {

        return (
            <div>
                <h1>Tableau d'évènements</h1>
                <Table striped bordered hover>
                   <thead>
                       <tr>
                           <th>Modele</th>
                           <th>Marque</th>
                           <th>Prix</th>
                       </tr>
                   </thead>
                    <tbody>
                       <Junior modele="Playstation 5" marque="Sony" prix={500}/>
                    </tbody>
                </Table>
            </div>
        );

}

export default Tableau;