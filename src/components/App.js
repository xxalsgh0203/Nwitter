import React, { useState } from "react";
import AppRouter from "./Router";
import authService from "../firebase";

function App() {
  const auth = authService.auth;
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  return (
    <><AppRouter isLoggedIn={isLoggedIn}/></>
  );
}

export default App;
