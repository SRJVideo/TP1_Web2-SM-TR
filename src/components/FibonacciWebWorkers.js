import React, { Component } from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import WorkerBuilder from "./webworkers/WorkerBuilder";
import FiboWorker from "./webworkers/worker";
//https://www.newline.co/fullstack-react/articles/introduction-to-web-workers-with-react/
//https://javascript.plainenglish.io/web-worker-in-react-9b2efafe309c

const instance = new WorkerBuilder(FiboWorker);
class FibonacciWebWorkers extends Component {
   state = {
        valeur_entree:0,
        valeur_finale:0
    }

    componentDidMount() {
        instance.onmessage = (message) => {
            if (message) {
                this.setState({  valeur_finale : message.data })
                console.log("Resultat Fibonacci", message.data);
            }
        };
    }

    gererSaisie = (ev) => {
       this.setState( {
           [ev.target.name] : ev.target.value
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
                        <Button onClick={() => instance.postMessage(Number(this.state.valeur_entree))} >Calculer</Button>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        {console.log("setState: "+this.state.valeur_entree)}
                        <Form.Label name="valeur_finale" >Fibonacci({this.state.valeur_entree}) = {this.state.valeur_finale}</Form.Label>
                    </InputGroup>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Temps : {0}</Form.Label>
                </Form.Group>
            </div>
        );
    }
}
export default FibonacciWebWorkers;