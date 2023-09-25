function TableauJunior (props) {
    const modele = props.modele;
    const marque = props.marque;
    const prix = props.prix;

    return (
            <tr>
                <td>{modele}</td>
                <td>{marque}</td>
                <td>{prix} $</td>
            </tr>
    );

}


export default TableauJunior;