import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
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

    }

    return { user, handleGoogleSignIn }
}

export default useFirebase;