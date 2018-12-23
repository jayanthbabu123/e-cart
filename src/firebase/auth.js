import {firebase,googleAuthProvider} from './firebase'

export const googleLogin= ()=>{
    return ()=>{
      return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startSignOut = ()=>{
    return()=>{
        localStorage.setItem('userData', null)
        return firebase.auth().signOut();
    }
}