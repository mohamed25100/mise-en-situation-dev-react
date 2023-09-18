import { USER_CONNECT, USER_TYPES } from "../types/userTypes"

/*
export const loginFormateur = (user) => {
    return {
        type : USER_TYPES.USER_FORMATEUR,
        payload : user
    }
}

export const loginEtudiant = (user) => {
    return {
        type : USER_TYPES.USER_ETUDIANT,
        payload : user
    }
}

export const loginManager = (user) => {
    return {
        type : USER_TYPES.USER_MANAGER,
        payload : user
    }
    
}*/

export const login = (user) => {
    return {
        type : USER_CONNECT.USER_LOGIN,
        payload : user
    }
}

export const logout = () => {
    return {
        type : USER_CONNECT.USER_LOGOUT
    }
}