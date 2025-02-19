"use client";

import RegisterForm from "../components/register.js";

export default function Register() {
  const handleRegister = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      return "Użytkownik o tym emailu już istnieje!";
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return "Rejestracja zakończona sukcesem! Możesz się teraz zalogować.";
  };

  return <RegisterForm onRegister={handleRegister} />;
}
