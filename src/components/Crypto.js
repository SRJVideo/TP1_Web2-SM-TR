import React from 'react';
import {Button, Table} from "react-bootstrap";

class Crypto extends React.Component {
    render() {
        return (
            <div>
                <h1>Crypto</h1>
                
                <Table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Bitcoin</td>
                        <td>35309 $</td>
                        <td>29</td>
                        <td>1023961.00 $</td>
                        <td><Button variant="primary">Primary</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}



export default Crypto;