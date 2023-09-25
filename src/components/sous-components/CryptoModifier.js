import {Button} from "react-bootstrap";

function CryptoModifier(props){

    let modPrix = props.prix;
    let modQuantite = props.quantite;

    return (
        <tr>
            <td><h3>Modifier</h3></td>
            <td><input id="val-pr" type="number" defaultValue={modPrix}/></td>
            <td><input id="val-qu" type="number" defaultValue={modQuantite}/></td>
            <td><Button onClick={() => props.onClick()} variant="outline-primary">Enregistrer</Button></td>
        </tr>
    );
}

export default CryptoModifier;