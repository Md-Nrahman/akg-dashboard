import React from 'react'
import jwt_decode from "jwt-decode";


class UserInfo extends React.Component{
    userinfo(){
        var token = JSON.parse(localStorage.getItem('login')).accesstoken;
var decoded = jwt_decode(token);
console.log(decoded)
    }
}