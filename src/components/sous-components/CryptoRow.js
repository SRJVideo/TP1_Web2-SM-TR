import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class CryptoRow extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: undefined,
            nom: null,
            prix: undefined,
            quantite: undefined,
            total: undefined

        }
    }

    componentDidMount() {
        this.setState(  {
            key: this.props.key,
            nom: this.props.nom,
            prix: this.props.prix,
            quantite: this.props.quantite,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.state.prix !== prevState.prix ||
            this.state.quantite !== prevState.quantite ){

            this.setState({
                total : Number(this.state.prix) * Number(this.state.quantite)
            })
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.nom}</td>
                <td>{new Intl.NumberFormat("fr-CA").format(this.state.prix)   } $</td>
                <td>{this.state.quantite}</td>
                <td>{new Intl.NumberFormat("fr-CA").format(this.state.total)} $</td>
                <td><Button onClick={() => this.props.onClick()} variant="primary">Modifier</Button></td>
            </tr>
        );
    }
}

export default CryptoRow;