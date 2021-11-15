import { initializeApp } from "firebase/app";
import {  getAuth, NextOrObserver, sendPasswordResetEmail, signInWithEmailAndPassword, User } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD6i1IqXtVfVVn7UwYB9ly1L5VsCy6_S5g",
    authDomain: "bbtm-248bb.firebaseapp.com",
    projectId: "bbtm-248bb",
    storageBucket: "bbtm-248bb.appspot.com",
    messagingSenderId: "249496689066",
    appId: "1:249496689066:web:b03572c4eb035f9c95b3d3",
    measurementId: "G-443R403850"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = getFirestore(app);

const getUser = ()  => {
    return auth.currentUser;
}

const appSignInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // tslint:disable-next-line
            console.log(user);
            return user;

            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // tslint:disable-next-line
            console.log(errorCode + ': ' + errorMessage);

        });
    } catch (err) {
        console.error(err);
    }
};

const appSendPasswordResetEmail = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
    }
};

const logout = () => auth.signOut();

const detectChange = (callback: NextOrObserver<User | null>) => {
    const unsubscribe = auth.onAuthStateChanged(callback)
    return unsubscribe
}

export {
    detectChange,
    getUser,
    appSignInWithEmailAndPassword,
    appSendPasswordResetEmail,
    logout,
};
