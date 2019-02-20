import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
  const toogleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log('AuthContext', authContext.authenticated)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http requset...
    // const timer = setTimeout(() => {
    //   // alert('Saved data to cloud!')
    // }, 1000);
    toogleBtnRef.current.click();
    return () => {
      // clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in useEffect ')
    }
  }, []);

  useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
          console.log('[Cockpit.js] cleanup  work  2nd in useEffect ')
        }

  })

    const assignedClasses = [];
    let btnClass = '';

    if ( props.showPersons) {
        btnClass = classes.red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push(classes.red) // classes = ['red']
    }

    if ( props.personsLength <= 1 ) {
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }

    return (
        <div >
            <h1 className={btnClass}>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
              ref={toogleBtnRef}
              className={assignedClasses.join(' ')}
              onClick={props.clicked}>Toggle Persons</button>
              {/* <AuthContext.Consumer>
                {context =>  <button onClick={context.login}>Log in</button>}
              </AuthContext.Consumer> */}
              <button onClick={authContext.login}>Log in</button>

        </div>
    );
}

export default React.memo(cockpit);