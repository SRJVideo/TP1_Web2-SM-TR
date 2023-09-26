import React, { Component } from 'react';
import calculFibonacci  from './CalculFibonacci.js';


class Fibonacci extends Component {
    state = {
        valeur_entree: 0,
        valeur_finale: 0
    }

    handleValeur_entree = (e) => {
        this.setState({
            valeur_entree: Number(e.target.value)
        })
    }




    appelCalculFibonacci = () => {
        
        let result = calculFibonacci(Number(this.state.valeur_entree));
            this.setState({
            valeur_finale:result 
        })
        
       
    }





    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>
                <label>
                    Enter n:
                    <input type="number" onChange={this.handleValeur_entree} />
                </label>
                <button onClick={this.appelCalculFibonacci}>Calcul</button><br />
                Fibonacci({this.state.valeur_entree}) ={this.state.valeur_finale}
            </div>
        );
    }
}
export default Fibonacci;