import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password ) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user Log out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    }, [])





    const useInfo = {createUser, signIn, user, logOut, loading, googleLogin,githubLogin}

    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object
}

export default AuthProvider;