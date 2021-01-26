import {LOGIN,LOGIN_FAILED, LOGOUT} from '../types/auth';

export const UserLogin=()=>(dispatch)=>{
    dispatch({ type: LOGIN })
}

export const LoginFailed=()=>(dispatch)=>{
    dispatch({ type: LOGIN_FAILED, payload: "error" })
}


export const LogOut=()=>(dispatch)=>{
    dispatch({ type: LOGOUT})
}