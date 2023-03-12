// import React, { useState, useEffect } from "react";
// import styled, { css } from "styled-components";
// import Form from "./Form";
// import { auth } from "./firebase";

// const StyledWrapper = styled.section`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   margin-top: 5rem;
// `;

// const StyledHeading = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   font-family: "Montserrat";
//   text-transform: uppercase;
//   color: hsl(153, 91%, 48%, 100%);

//   ${({ logout }) =>
//     logout &&
//     css`
//       color: red;
//     `};
// `;

// const LogoutButton = styled.button`
//   color: hsla(152, 94%, 33%, 1);
//   background-color: hsla(204, 26%, 96%, 1);
//   padding: 0.6rem 1.8rem;
//   font-size: 1.1rem;
//   border: none;
// `;

// const FirebaseApp = () => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const handleSignOut = () => auth.signOut();

//   useEffect(() => {
//     auth.onAuthStateChanged(user => {
//       if (user) {
//         setCurrentUser(user);
//         localStorage.setItem("user", user.uid);
//       } else {
//         setCurrentUser(null);
//         localStorage.removeItem("user");
//       }
//     });
//   }, []);

//   return (
//     <StyledWrapper>
//       {currentUser ? (
//         <>
//           <StyledHeading>Zalogowany</StyledHeading>
//           <LogoutButton onClick={handleSignOut}>wyloguj się</LogoutButton>
//         </>
//       ) : (
//         <StyledHeading logout>Niezalogowany</StyledHeading>
//       )}
//       <Form />
//     </StyledWrapper>
//   );
// };

// export default FirebaseApp;