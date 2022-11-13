import React, { useContext, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //console.log("kullanici giriş yaptı", res.user);
        dispatch({ type: "LOGIN", payload: (any = res.user) });
      })
      .catch((err) => {
        setError(err);
      });
  };
  return { login, error };
};
