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
                <Mesure echelle="cm" coeff={100} vinput={this.state.distance} vechelle={this.state.echelle} onChange={this.onDistanceChange}/>
                <Mesure echelle="m" coeff={1} vinput={this.state.distance} vechelle={this.state.echelle}  onChange={this.onDistanceChange}/>
                <Mesure echelle="km" coeff={0.001} vinput={this.state.distance} vechelle={this.state.echelle} onChange={this.onDistanceChange}/>
            </div>
        );
    }
}
export default Convertisseur;