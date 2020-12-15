import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

//default exports dont need {} when being imported
const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper green darken-3">
        <div className="container">
             <Link to="/"className='brand-logo'>Productively</Link>
            { auth.isLoaded && links }
        </div>   
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        //object represents things we want to attach to the props
        auth: state.firebase.auth
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