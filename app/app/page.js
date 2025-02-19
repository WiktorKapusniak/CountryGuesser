"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebaseConfig";
import LoginForm from "./components/login.js";

export default function Login() {
  const router = useRouter();

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      router.push("/mainpage");
      return true;
    }
    return false;
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Zalogowano przez Google:", result.user);
      router.push("/mainpage");
    } catch (error) {
      console.error("Błąd logowania przez Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Zalogowano przez Facebook:", result.user);
      router.push("/mainpage");
    } catch (error) {
      console.error("Błąd logowania przez Facebook:", error);
    }
  };

  return <LoginForm onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} onFacebookLogin={handleFacebookLogin} />;
}
