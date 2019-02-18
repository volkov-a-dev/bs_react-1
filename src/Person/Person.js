import React from 'react';
import classes from './Person.css';

let persone = function (props) {
    
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error( 'Something went wrong');
    }
    
    return (
        <section className={classes['persone-block']}>
            <h2 className={classes['persone-block__name']}
                onClick={props.click}>{props.name}</h2>
            <p className={classes['persone-block__age']}>
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

export default persone;