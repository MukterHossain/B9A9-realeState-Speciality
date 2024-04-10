import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // update user profile
    const updateUserProfile = (name, image) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
    }

    // user Log out
    const logOut = () =>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    // sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    }, [])


    const useInfo = {createUser, signIn, user, logOut, loading, googleLogin,githubLogin, updateUserProfile}

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