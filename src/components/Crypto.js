import React from 'react';
import Table from 'react-bootstrap/Table'
import CryptoRow from "./sous-components/CryptoRow";
import CryptoModifier from "./sous-components/CryptoModifier";

class Crypto extends React.Component {



    render() {
        return (
            <div>
                <h1>Crypto</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CryptoRow nom={"Bitcoin"} prix={35309} quantite={29}/>
                        <CryptoModifier/>
                    </tbody>
                </Table>
            </div>
        );
    }
}



export default Crypto;