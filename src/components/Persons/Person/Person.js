import React, { Component } from 'react';
import classes from './Person.css';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

/* 
    <React.Fragment>  => import React, { Component } from 'react';
    <Fragment>  => import React, { Component, Fragment } from 'react'; 
    Aux = custome
    Fragment = core in to React
*/

class Persone extends Component {
    render() {
        console.log('[Person.js] rendering...')

        return (
            <Aux>
                <h2 className={classes['persone-block__name']}
                    onClick={this.props.click}>{this.props.name}</h2>
                <p className={classes['persone-block__age']}>
                    <span>{this.props.children}</span> {this.props.age}
                </p>
                <input 
                    className="persone-block__input" 
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Persone, classes['persone-block']);