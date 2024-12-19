import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, 
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, 
    updateProfile} from "firebase/auth";




export const AuthContext=createContext();
const auth=getAuth(app);

const googleProvider= new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // console.log(loading,user)

    const createUser = (email,password) =>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser= (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
   
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user); 
                 
            })
            .catch(error => {
                console.error("Google login failed:", error.message);
                setError({ ...error, google: "Failed to sign in with Google." });
            });
    }

    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser,updateData)
    }
    
    
     
    const authInfo={
        user,setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,setLoading,
        signInWithGoogle,
        updateUserProfile
     }

   useEffect( ()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })
    
    return  ()=> {
        unSubscribe()
    }
   },[])
    return  <AuthContext.Provider value={authInfo}>
             {children}
    </AuthContext.Provider>
};

export default AuthProvider;