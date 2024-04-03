import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../fireauth.init";
import { createContext, useEffect, useState } from "react";
export const UserrContext = createContext(null);

const Share = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const handleregister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up
        //setUser(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
       // setUser(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlelogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        //setUser(result);
       // console.log("successfully login");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(user);
  const logOut = ()=> {

    signOut(auth).then(() => {
      setUser(null);
      
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
   const unsub = onAuthStateChanged(auth, (curuser) => {
      if (curuser) {
        setUser(curuser);
        console.log(curuser);
       
      }
      return ()=> {
        unsub.unsubscribe();
      }
    });

  },[]);
  
  
  const userData = {
    handleregister,
    handlelogin,
    user,
    googleSignUp,
    logOut
  };
  return (
    <div>
      <UserrContext.Provider value={userData}>{children}</UserrContext.Provider>
    </div>
  );
};

export default Share;
