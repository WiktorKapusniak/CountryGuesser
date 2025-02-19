"use client";

import { useState } from "react";
import Link from "next/link";
export default function RegisterForm({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultMessage = onRegister(email, password);
    setMessage(resultMessage);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Zarejestruj się</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Adres email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adres email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Hasło</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
            Zarejestruj się
          </button>
        </form>
        {message && <p className="text-center text-sm text-red-500 mt-4">{message}</p>}
        <p className="text-center text-sm text-gray-500 mt-6">
          Masz już konto?{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  );
}
