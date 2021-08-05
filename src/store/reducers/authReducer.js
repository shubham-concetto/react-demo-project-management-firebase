const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: "Invalid login details"
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            return state;
        case "SIGNUP_SUCCESS":
            console.log("SignUp success")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("Signup error");
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;