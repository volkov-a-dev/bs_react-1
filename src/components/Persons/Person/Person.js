import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

import AuthContext from '../../../context/auth-context';
// import { isContext } from 'vm';
/* 
    <React.Fragment>  => import React, { Component } from 'react';
    <Fragment>  => import React, { Component, Fragment } from 'react'; 
    Aux = custome
    Fragment = core in to React
*/

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;


    componentDidMount() {
        this.inputElementRef.current.focus();

        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')

        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? (
                        <p>Authenticated!</p>
                        ) : (
                        <p>Please log in</p>
                    )}

                <h2 className={classes['persone-block__name']}
                    onClick={this.props.click}>{this.props.name}</h2>
                <p className={classes['persone-block__age']}>
                    <span>{this.props.children}</span> {this.props.age}
                </p>
                <input 
                    className="persone-block__input" 
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes['persone-block']);