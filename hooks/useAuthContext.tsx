import React, { useContext } from "react";
import { AuthContext } from "../context/AutContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("context bulunamdi");
  }
  return { context };
};
