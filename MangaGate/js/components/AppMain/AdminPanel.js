import React from "react";
import Navigation from "../LandingPage/Navigation";
import LoginForm from "./LoginForm";

const AppMain = () => {
    
  return (
      <>
        <header className="header">
          <Navigation/>
          <main className="page__wrapper--admin">
            <div className="login__form">
              <LoginForm/>
            </div>
          </main>
        </header>
      </>
    
    )
  }

export default AppMain  
  