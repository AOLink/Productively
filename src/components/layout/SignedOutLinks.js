import React from 'react'
import { NavLink } from 'react-router-dom'

//const SignedInLinks = () => {

//named v default exports

// named exports- use when you have multiple things to export?
//export
 const SignedOutLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>

        </ul>
    )
}


export default SignedOutLinks