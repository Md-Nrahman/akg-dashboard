import {LOGIN,LOGIN_FAILED, LOGOUT} from '../types/auth'

// const initialState= {
//     login:false,
//     error:''
// }

const authReducer = (state = {login: false, error: null }, action)=>{
    switch(action.type){
        case LOGIN: 
            return {
                ...state,
                login: true
            }
        case LOGOUT: 
            return {
                ...state,
                login:false
            }
        case LOGIN_FAILED:
            return{
                ...state,
                error:action.payload
            }

        default: 
            return state
    }
}


export default authReducer;