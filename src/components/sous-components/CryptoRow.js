import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class CryptoRow extends Component {
    constructor(props) {
        super(props);

        this.state={
            nom: null,
            prix: 0,
            quantite: 0,
            total: 0
        }
    }

    componentDidMount() {
        this.setState(  {
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
            <div>
                <tr>
                    <td>{this.state.nom}</td>
                    <td>{this.state.prix} $</td>
                    <td>{this.state.quantite}</td>
                    <td>{this.state.total} $</td>
                    <td><Button variant="primary">Modifier</Button></td>
                </tr>
            </div>

        );
    }
}

export default CryptoRow;