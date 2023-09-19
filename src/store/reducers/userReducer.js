import { USER_CONNECT, USER_TYPES } from "../types/userTypes"

const INITIAL_STATE = {
    userId : -1,
    formationId : 0,
    nameClass : "",
    nom : "",
    prenom : "",
    email : "",
    isLogin : false,
}

export const UserReducer = (state= INITIAL_STATE, action) =>{
    const {type, payload} = action
    switch(type){
        case USER_CONNECT.USER_LOGIN : {
            
            return {
                ...state,
                userId : payload.id,
                formationId : payload.formationId,
                nameClass : payload.nameClass,
                nom : payload.nom,
                prenom : payload.prenom,
                email : payload.email   ,
                isLogin : true
            }
        }
        case USER_CONNECT.USER_LOGOUT : {
            return {
                userId : -1,
                formationId : 0,
                nameClass : "",
                nom : "",
                prenom : "",
                email : "",
                isLogin : false,
            }
        }

        default:
            return state
    }
}