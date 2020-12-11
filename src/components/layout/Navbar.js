import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

//default exports dont need {} when being imported
const Navbar = () => {
    return(
        <nav className="nav-wrapper green darken-3">
        <div className="container">
             <Link to="/"className='brand-logo'>Productively</Link>
             <SignedInLinks />
             <SignedOutLinks />
        </div>   
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
         
    }
} 

export default connect(mapStateToProps) (Navbar) 

/*
const Navbar = () => {
    return(
        // jsx template
        //nav.nav-wrapper.grey.darken-3      
        nav.nav-wrapper.grey.darken-3
        div.container
        )
}*/