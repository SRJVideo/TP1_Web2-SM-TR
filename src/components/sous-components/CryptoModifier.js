import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class CryptoModifier extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td><h3>Modifier</h3></td>
                    <td><input type="number"/></td>
                    <td><input type="number"/></td>
                    <td><Button variant="outline-primary">Enregistrer</Button></td>
                </tr>
            </div>
        );
    }
}

export default CryptoModifier;