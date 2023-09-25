import {Button} from "react-bootstrap";

function CryptoModifier(props){

    let nom = props.nom;
    let prix = props.prix;
    let quantite = props.quantite;

    return (
        <tr>
            <td><h3>Modifier <i>{nom}</i></h3></td>
            <td><input id="val-pr" type="number" defaultValue={prix}/></td>
            <td><input id="val-qu" type="number" defaultValue={quantite}/></td>
            <td><Button onClick={() => props.onClick()} variant="outline-primary">Enregistrer</Button></td>
        </tr>
    );
}

export default CryptoModifier;