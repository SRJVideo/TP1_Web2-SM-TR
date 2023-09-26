import React, { Component } from 'react';
/*import  {calculFibonacci}  from './CalculFibonacci.js';*/


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

   

     calculFibonacci = (num) => {
        if (num === 0) {
            return 0
        }
        else if (num === 1) {
            return 1
        }
        else {
            return this.calculFibonacci(num - 1) + this.calculFibonacci(num - 2)
        }
    }

    handleValeur_finale = (e) => {
        this.setState({
            valeur_finale: Number(e.target.value),
        })
        this.valeur_finale = this.calculFibonacci(this.state.valeur_entree)


    }

    //faire une fonction qui appelle calculFibonacci puis met a jour le state 


    /*appelCalculFibonacci = () => {
        this.setState({
            valeur_finale: calculFibonacci(this.state.valeur_entree)
        })
    }*/





    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>
                <label>
                    Enter n:
                    <input type="number" onChange={this.handleValeur_entree} />
                </label>
                <button onClick={() => this.handleValeur_finale}>Calcul</button><br />
                Fibonacci({this.state.valeur_entree}) ={this.state.valeur_finale}
            </div>
        );
    }
}
export default Fibonacci;