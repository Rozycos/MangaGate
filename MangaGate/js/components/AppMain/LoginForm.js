import React from "react";
//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth"

const LoginForm = () => {

    const handleSignIn = e => {
        e.preventDefault();
        //auth
        //signInWithEmailAndPassword(auth, email, password)
        //   catch(error =>
        //     alert(
        //       `Your email or password is incorrect, please check your data, ${error}`
        //     )
        //   );
      };

    return (
        <>
            <div className="login__column">
                <form className="form">
                    <div class="form__field">
                        <label className="form__label">Email</label>
                        <input className="form__input" type="email" name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form__field">
                        <label className="form__label">Password</label>
                        <input className="form__input" type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>    
                </form>
                <button className="btn btn--login" onClick={handleSignIn}>
                        Login
                </button>
            </div>
        </>
    )

}

export default LoginForm;