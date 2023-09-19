import React, { Component } from 'react';

class Fibonacci extends Component {
   state = {
        valeur_entree: 0,
        valeur_finale: 0

    }

  

    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>                
            </div>
        );
    }
}
export default Fibonacci;