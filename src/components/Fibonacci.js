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

  

    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>
                <label>
                    Enter n:
                    <input type="number" value={this.state.valeur_entree} onChange={this.handleValeur_entree} />
                </label> 
                <button onClick>Calcul</button><br/>
                <label>
                    Fibonacci() =
                </label>              
            </div>
        );
    }
}
export default Fibonacci;