import React, { Component } from 'react';

class Fibonacci extends Component {
    state = {
        valeur_entree: 0,
        valeur_finale: 0
    }

    handleValeur_entree = (e) => {
        this.setState({
            valeur_entree: e.target.value
        })
    }

    calculFibonacci = (num) => {
        if (num === 0) {
            this.setState({
                valeur_finale: 0
            })
        }
        else if (num === 1) {
            this.setState({
                valeur_finale: 1
            })
        }
        else {
            this.setState({
                valeur_finale: this.calculFibonacci(num - 1) + this.calculFibonacci(num - 2)
            })
        }
    }



    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>
                <label>
                    Enter n:
                    <input type="number" value={this.state.valeur_entree} onChange={this.handleValeur_entree} />
                </label>
                <button onClick={()=>this.calculFibonacci(Number(this.state.valeur_entree))}>Calcul</button><br />
                Fibonacci() :{Number(this.state.valeur_finale)}
            </div>
        );
    }
}
export default Fibonacci;