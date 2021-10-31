import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FirebaseInit from '../firbase/FirebaseInit';
FirebaseInit()

const useAllData = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [products, setProducrs] = useState([])
    const [isLoding, setIsLoding] = useState(true)
    const successAlart = () => {
        Swal.fire(
            'Congratulations!',
            'You have successfully Login',
            'success'
          )
    }
    const logOutAlart = () => {
        Swal.fire(
            'Congratulations!',
            'You have successfully LogOut',
            'success'
          )
    }
    const unSuccessAlart = () => {
        Swal.fire(
            'Opps!',
            'Something Worng',
            'error'
          )
    }

  useEffect(() => {
    fetch("https://ghoulish-pumpkin-61403.herokuapp.com/allProduct").then(res=> res.json()).then(data => setProducrs(data))
  },[])

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const googleAccount = () => {
       return signInWithPopup(auth, provider)
  // .then((result) => {
  //     const user = result.user;
  //     setUser(user)
  //     successAlart()
      

  // })
  //        .catch((error) => {
  //   const errorMessage = error.message;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     setError(errorMessage)
  //     unSuccessAlart()
  // });

  }
  
  const logOut = () => {
    setIsLoding(true)
    signOut(auth).then(() => {
      setUser({})
      logOutAlart()
    })
    .finally(()=> setIsLoding(false))
    
  }
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user)
          // ...
        }
        setIsLoding(false)
      });
    }, [])
    return {
        googleAccount,logOut,
        user, error,successAlart,unSuccessAlart,products,setUser, setError,setIsLoding,isLoding
    }
};

export default useAllData;