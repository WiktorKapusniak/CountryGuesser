"use client";

import { useState, useEffect } from "react";
import Notification from "./notification";

export default function Profile() {
  const [username, setUsername] = useState("Nieznany użytkownik");
  const [privacySettings, setPrivacySettings] = useState("public");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Nieznany użytkownik";
    const storedPrivacy = localStorage.getItem("privacySettings") || "public";

    setUsername(storedUsername);
    setPrivacySettings(storedPrivacy);
  }, []);

  const handleSave = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("privacySettings", privacySettings);
    setNotification("Zapisano zmiany");
  };

  const handleDeleteAccount = () => {
    if (confirm("Czy na pewno chcesz usunąć swoje konto? Tej operacji nie można cofnąć.")) {
      localStorage.removeItem("username");
      localStorage.removeItem("privacySettings");

      setNotification("Twoje konto zostało usuniete");
      window.location.reload(); // Resetowanie strony po usunięciu konta
    }
  };
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="container mx-auto mt-12 px-6 bg-white shadow-md rounded-lg p-6">
      {notification && <Notification message={notification} />}

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Twój Profil</h1>

      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Nazwa użytkownika</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500" />
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Ustawienia prywatności</label>
        <select value={privacySettings} onChange={(e) => setPrivacySettings(e.target.value)} className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500">
          <option value="public">Publiczny</option>
          <option value="private">Prywatny</option>
          <option value="friends">Tylko znajomi</option>
        </select>
      </div>

      <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
        Zapisz zmiany
      </button>

      <hr className="my-8" />

      <div>
        <h2 className="text-xl font-bold text-red-600 mb-4">Usuń konto</h2>
        <p className="text-gray-900 mb-4">Usunięcie konta jest operacją nieodwracalną. Wszystkie dane zostaną trwale usunięte.</p>
        <button onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Usuń konto
        </button>
      </div>
    </div>
  );
}
