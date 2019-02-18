import React from 'react';
import './Person.css';
import Radium from 'radium';

let persone = function (props) {
    return (
        <section className="persone-block">
            <h2 className="persone-block__name"
                onClick={props.click}>{props.name}</h2>
            <p className="persone-block__age">
                <span>{props.children}</span> {props.age}
            </p>
            <input 
                className="persone-block__input" 
                type="text"
                onChange={props.changed}
                value={props.name} />
        
        </section>
    )
}

export default Radium(persone);