import React from 'react';

function Mesure(props) {
    return (
        <div>
            <fieldset>
                <legend>Saisissez la mesure en {props.unitetype}</legend>
                <input type="number" onChange={(e)=>props.onChange(e,props.echelle)} value={ conversion(props)} />
            </fieldset>
        </div>

    )
}

function conversion(props){
    
    if(props.vechelle !== props.echelle){
        
        return props.vinput * props.coeff;
    }else{
        return props.vinput
    }
}

export default Mesure;