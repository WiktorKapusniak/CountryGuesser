"use client";

import { useState } from "react";

export default function LoginForm({ onLogin, onGoogleLogin, onFacebookLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (!success) {
      setMessage("Nieprawidłowy email lub hasło");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Witaj ponownie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Adres email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adres email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Hasło</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-500" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Zaloguj się</button>
        </form>
        {message && <p className="text-center text-sm text-red-500 mt-4">{message}</p>}
        <div className="mt-6">
          <button onClick={onGoogleLogin} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md flex items-center justify-center mb-3">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Kontynuuj z Google
          </button>
          <button onClick={onFacebookLogin} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md flex items-center justify-center">
            <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" />
            Kontynuuj z Facebook
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Nie masz konta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Zarejestruj się
          </a>
        </p>
      </div>
    </div>
  );
}
