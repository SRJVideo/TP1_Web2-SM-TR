import React, { Component } from 'react';

class Convertisseur extends Component {
   state = {
        valeur_centimetre: 0,
        valeur_metre: 0,
        valeur_kilometre: 0
    }

    handleValeur_centimetreChange = (e) => {
        this.setState({
            valeur_centimetre: e.target.value, 
            valeur_metre: Number(this.state.valeur_centimetre) / 100,
            valeur_kilometre: Number(this.state.valeur_centimetre) / 100000
        })
    }

    handleValeur_metreChange = (e) => {
        this.setState({
            valeur_metre: e.target.value,
            valeur_centimetre: Number(this.state.valeur_metre) * 100,
            valeur_kilometre: Number(this.state.valeur_metre) / 1000
        })
    }

    handleValeur_kilometreChange = (e) => {
        this.setState({
            valeur_kilometre: e.target.value,
            valeur_centimetre: Number(this.state.valeur_kilometre) * 100000,
            valeur_metre: Number(this.state.valeur_kilometre) * 1000
        })
    }


    render() {
        return (
            <div>
                <h1 style={{ textAlign: "left" }}>Convertisseur d'une unité de mesure</h1>
                <fieldset>
                    <legend>Saisissez la mesure en Centimètre :</legend>
                    <input type='text' onChange={this.handleValeur_centimetreChange} value={this.state.valeur_centimetre} />
                </fieldset>
                <fieldset>
                    <legend>Saisissez la mesure en Mètre :</legend>
                    <input type='text' onChange={this.handleValeur_metreChange} value={this.state.valeur_metre}/>
                </fieldset>
                <fieldset>
                    <legend>Saisissez la mesure en Kilomètre :</legend>
                    <input type='text' onChange={this.handleValeur_kilometreChange} value={this.state.valeur_kilometre} />
                </fieldset>
            </div>
        );
    }
}
export default Convertisseur;