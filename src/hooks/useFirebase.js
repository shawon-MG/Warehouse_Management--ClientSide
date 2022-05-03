import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import app from "../firebase.config";
import { auth } from "../firebase.config";

const googleProvider = new GoogleAuthProvider();
// const auth = getAuth(app);


const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleSignIn = () => {
        console.log('Google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log('Error', error);
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return { user, handleGoogleSignIn, handleSignOut }
}

export default useFirebase;