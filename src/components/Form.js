import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, userProfile } from '../redux/API';
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const errorConnection = document.querySelector(".error_connection")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredential = {
      email: username,
      password,
    };

    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        setUsername("");
        setPassword("");
        dispatch(userProfile()).then((result) => {});
        navigate("/profile");
      } else {
        console.error("Erreur dans l'identifiant ou le mot de passe")
        errorConnection.classList.remove("hidden")
      }
    });
  };


  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLoginEvent}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        <div className="error_connection hidden">
        Erreur dans l'identifiant ou le mot de passe
        </div>
      </form>
    </section>
  );
};