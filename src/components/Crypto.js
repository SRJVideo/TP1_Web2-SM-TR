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
    handleCrypto(index) {
        this.setState({
            rowHandlerId : index
        })
    }

    enregistrerCrypto() {

        this.setState({
            // eslint-disable-next-line array-callback-return
            crypto :  this.state.cryptos.map((cryp,index) =>  {
                 if (index === this.state.rowHandlerId){
                    cryp.prix = document.getElementById("val-pr").value;
                    cryp.quantite = document.getElementById("val-qu").value;
                }
            }),
            rowHandlerId : null
        })
    }


    render() {
        return (
            <div>
                <h1>Crypto</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="dubleu">Nom</th>
                            <th className="dubleu">Prix</th>
                            <th className="dubleu">Quantité</th>
                            <th className="dubleu">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cryptos.map((cryp,index) => {
                            if(this.state.rowHandlerId === index){
                                return(
                                    <>
                                        <CryptoRow nom={cryp.nom} prix={cryp.prix} quantite={cryp.quantite} onClick={() => this.handleCrypto(index)}/>
                                        <CryptoModifier nom={cryp.nom}  prix={cryp.prix} quantite={cryp.quantite} onClick={() => this.enregistrerCrypto()}/>
                                    </>
                                )
                            }
                            return(
                                    <CryptoRow nom={cryp.nom} prix={cryp.prix} quantite={cryp.quantite} onClick={() => this.handleCrypto(index)}/>
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