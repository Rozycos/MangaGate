import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase_setup/firebase";
import Navigation from "../LandingPage/Navigation";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import Hamburger from "../LandingPage/Hamburger";
import { AppContext } from "../context/UserProvider";

const handleSignOut = () => auth.signOut();

const AppMain = () => {
  const{currentUser} = useContext(AppContext)
//   const [currentUser, setCurrentUser] = useState(null);

// //   /*Usertype służy do odróżnienia super admina (ma dostęp do wszystkich funkcji), 
// //   od innych użytkowników zalogowanych (wyśietla im się, że nie mogą zobaczyć panelu super admina)*/
// //   const UserType = () =>{
// //     if (currentUser, localStorage.user === "bJthvWBjSxNqIifun0Zsu88MXDf1"){
// //       return (
// //         <>
// //           <h2 style={{backgroundColor:"white"}}>Welcome to {localStorage.userName} admin panel</h2>
// //           <button className="btn btn__primary btn__form" onClick={handleSignOut}>LogOut</button>
// //         </>
// //       )
// //     } else if (currentUser, localStorage.user){
// //         return (
// //           <>
// //             <h2>Sorry {localStorage.userName}, this feature isn't ready yet...</h2>
// //             <button className="btn btn__primary btn__form" onClick={handleSignOut}>LogOut</button>
// //           </>
// //         )
// //         } else {
// //           return (
// //             <LoginForm/>
// //           )
// //         }
// //   }

//   useEffect(() => {
//     const unsubscripe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setCurrentUser(user);
//         localStorage.setItem("user", user.uid);
//         localStorage.setItem("userName", user.email);

//       } else {
//         setCurrentUser(null);
//         localStorage.removeItem("user");
//         localStorage.removeItem("userName");
//       }
//     });

//     return unsubscripe
//   }, []);

// return (
//       <>
//         <header className="header">
//           <Navigation />
//         </header> 
//         <main className="page__wrapper--admin">
//           <UserType/>
//         </main>
//       </>
//   )
// }

  return (
      <>
        <header className="header">
          <Navigation />
        </header> 
        <main className="page__wrapper--admin">
        {currentUser ? (
          <>
             <h2 style={{backgroundColor:"white"}}>Welcome to {currentUser.email} admin panel</h2>
             <button className="btn btn__primary btn__form" onClick={handleSignOut}>LogOut</button>
          </>
        ):(
            <LoginForm/>
        )}
        </main>
      </>
    
    )
    
  }

 
export default AppMain; 
