import React from 'react';

function Mesure(props) {
    return (
        <div>
            <fieldset>
                <legend>Saisissez la mesure en {props.unitetype}</legend>
                <input type="text" onChange={(e)=>props.onChange(e,props.echelle)} value={ conversion(props)} />
            </fieldset>
        </div>

    )
}

function conversion(props){
    if(props.vechelle !== props.echelle){
        if(props.vechelle === "km" && props.echelle === "cm"){
            return props.vinput * 100000;
        }
        else if(props.vechelle === "m" && props.echelle === "cm"){
            return props.vinput * 100;
        }
        if(props.vechelle === "cm" && props.echelle === "km"){
            return props.vinput * 0.00001;
        }
        else if(props.vechelle === "m" && props.echelle === "km"){
            return props.vinput * 0.001;
        }
        if(props.vechelle === "km" && props.echelle === "m"){
            return props.vinput * 1000;
        }
        else if(props.vechelle === "cm" && props.echelle === "m"){
            return props.vinput * 0.01;
        }
    }else{
        return props.vinput
    }
}

export default Mesure;