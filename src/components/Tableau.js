import React, {Component} from 'react';
import {Table} from "react-bootstrap";

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
                        <tr>
                            <td></td>
                            <td></td>
                            <td> $</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

}

export default Tableau;