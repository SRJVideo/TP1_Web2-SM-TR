import React from 'react';
import Table from 'react-bootstrap/Table'
import CryptoRow from "./sous-components/CryptoRow";
import CryptoModifier from "./sous-components/CryptoModifier";

class Crypto extends React.Component {

    state = {
        cryptos: [
            {nom:"Bitcoin",prix:35309,quantite:29},
            {nom:"Ethereum",prix:2233 ,quantite:12},
            {nom:"Tether",prix:136,quantite:3},
            {nom:"USD Coin",prix:1365 ,quantite:7},
            {nom:"BNB",prix:293,quantite:5},
            {nom:"XRP",prix:0.683,quantite:77},
            {nom:"Cardano",prix:0.3493,quantite:3},
            {nom:"Solana",prix:26.77,quantite:32},
            {nom:"Polkadot",prix:5.828 ,quantite:65},
        ],
        rowHandlerId:null
    }


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
                    {

                        this.state.cryptos.map((cryp,index) => {
                            if(this.state.rowHandlerId === index){
                                return(
                                    <CryptoModifier id="cry-mod" prix={cryp.prix} quantite={cryp.quantite} onClick={() => this.enregistrerCrypto()}/>
                                )
                            }
                                return(
                                    <CryptoRow key={index} nom={cryp.nom} prix={cryp.prix} quantite={cryp.quantite} onClick={() => this.handleCrypto(index)}/>
                                )


                        })
                    }


                    </tbody>
                </Table>
            </div>
        );
    }



}



export default Crypto;