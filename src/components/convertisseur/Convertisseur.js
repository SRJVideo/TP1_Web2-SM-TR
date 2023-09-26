import React, { Component } from 'react';
import Mesure from './Mesure';


class Convertisseur extends Component {
   state = {
        distance: 0,
        echelle: "cm"
    }

    handleDistance = (e) => {
        this.setState({
            distance: Number(e.target.value)
        })
    }

    handleEchelle = (ec) => {
        this.setState({
            echelle: ec
        })
    }

    onDistanceChange =(e,ec)=> {
        this.handleEchelle(ec)
        this.handleDistance(e)
    }


    render() {
        return (
            <div>
                <h1>Convertisseur d'unité de mesure</h1>
                <Mesure unitetype="Centimètres" echelle="cm" vinput={this.state.distance} vechelle={this.state.echelle} onChange={this.onDistanceChange}/>
                <Mesure unitetype="Mètres" echelle="m" vinput={this.state.distance} vechelle={this.state.echelle}  onChange={this.onDistanceChange}/>
                <Mesure unitetype="Kilomètres" echelle="km" vinput={this.state.distance} vechelle={this.state.echelle} onChange={this.onDistanceChange}/>
            </div>
        );
    }
}
export default Convertisseur;