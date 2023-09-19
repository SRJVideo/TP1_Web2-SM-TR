import React, { Component } from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";

class FibonacciWebWorkers extends Component {
   state = {
        valeur_entree:0,
        valeur_finale:0
    }

    fibonacci = (ev=this.state.valeur_entree) => {
       let valeur;

        if(ev == 0 || ev == 1  ) {
            valeur = Number(ev)
        }
        else {
            valeur = this.fibonacci(ev - 1) + this.fibonacci(ev - 2)
        }

        this.setState({  valeur_finale : valeur })
        return valeur
    }

    gererSaisie = (ev) => {
       this.setState( {
           /*valeur_entree */ [ev.target.name] : ev.target.value
       })
    }

    render() {
        return (
            <div>
                <h1>Calculateur de Fibonacci</h1>
                <Form.Group as={Col}>
                    <InputGroup>
                        <Form.Label>Entrer n°</Form.Label>
                        <Form.Control name="valeur_entree" onChange={this.gererSaisie } />
                        <Button onClick={() => this.fibonacci()} >Calculer</Button>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        {console.log("setState: "+this.state.valeur_entree)}
                        <Form.Label name="valeur_finale" >Fibonacci({this.state.valeur_entree}) = {this.state.valeur_finale}</Form.Label>
                    </InputGroup>
                </Form.Group>
            </div>
        );
    }
}
export default FibonacciWebWorkers;