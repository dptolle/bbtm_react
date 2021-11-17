import { NextOrObserver, sendPasswordResetEmail, signInWithEmailAndPassword, User } from "firebase/auth"
import { auth } from './firebase';

const getUser = () => {
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
