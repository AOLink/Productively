import React from 'react'
import { NavLink } from 'react-router-dom'

//const SignedInLinks = () => {

//named v default exports

// named exports- use when you have multiple things to export?
//export
 const SignedInLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1"> AO </NavLink></li>

        </ul>
    )
}


export default SignedInLinks
 