import React, {Component} from 'react';

function TableauJunior (props) {
    const modele = props.modele;
    const marque = props.marque;
    const prix = props.prix;

    return (
        <div>
            <tr>
                <td>{modele}</td>
                <td>{marque}</td>
                <td>{prix} $</td>
            </tr>
        </div>
    );

}


export default TableauJunior;