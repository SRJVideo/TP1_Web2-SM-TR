import React, { Component } from 'react';

class Convertisseur extends Component {
   state = {
        distance: 0,
        echelle: "cm"
    }

    handleDistance = (e) => {
        this.setState({
            distance: e.target.value
        })
    }

    handleEchelle = (e) => {
        this.setState({
            echelle: e.target.value
        })
    }



    render() {
        return (
            <div>
                <h1 style={{ textAlign: "left" }}>Convertisseur d'une unité de mesure</h1>
                <fieldset>
                    <legend>Saisissez la mesure en Centimètres</legend>
                    <input type='text' onChange={this.handleValeur_centimetreChange} value={this.state.valeur_centimetre} />
                </fieldset>
            </div>
        );
    }
}
export default Convertisseur;