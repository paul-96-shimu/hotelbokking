import React, { useEffect, useState } from 'react';
import { AuthContex } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig.init';




const GoogleProvider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)


    }


    const logOut = () => {

        setLoading(true)

        return signOut(auth)
    }


    const signInWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, async (currentUser) => {

            // setUser(currentUser);
            // SetLoading(false)



            if (currentUser) {
                const token = await currentUser.getIdToken(); // ✅ get Firebase ID token
                setUser({ ...currentUser, accessToken: token }); // ✅ token সহ user set
            } else {
                setUser(null);
            }
            setLoading(false);

        })

        return () => {
            unsubsribe()

        }

    }, [])



    const authUser = {
        createUser,
        logIn,
        user,
        logOut,
        signInWithGoogle,
        loading,

    }
    return (
        <AuthContex value={authUser}>
            {children}
        </AuthContex>
    );
};

export default Authprovider;
