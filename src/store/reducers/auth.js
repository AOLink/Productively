const initState = { 

            authError: null

}

const authReducer = (state = initState, action) => {

            switch(action.type) {
                case 'LOGIN_ERROR':
                console.log('Login Error');
                return { 

                    ...state,
                    authError: 'Login Failed'
                }    
                case 'LOGIN_SUCCESS':
                    console.log('Login Successful');
                    return {
                    ...state,
                    authError: ''
                    }
                
                case 'SIGNOUT_SUCCESS':
                    console.log('SIGNOUT SUCCESS')
                    return state;
                case 'SIGNUP_SUCCESS':
                    console.log('signup success')
                    return {
                        ...state,
                        authError: null
                    }
                    case 'SIGNUP_ERROR':
                        console.log('signup error')
                        return {
                            ...state,
                            authError: action.err.message
                            
                        }
                    default:
                       return state;

            }

}

export default authReducer