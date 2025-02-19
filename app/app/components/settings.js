"use client";

import { useState, useEffect } from "react";
import Notification from "@/app/components/notification";

export default function Settings() {
  const [language, setLanguage] = useState("pl");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setSoundEnabled(localStorage.getItem("soundEnabled") === "true");
    setLanguage(localStorage.getItem("language") || "pl");
    setNotificationsEnabled(localStorage.getItem("notificationsEnabled") === "true");
  }, []);

  const saveSettings = () => {
    localStorage.setItem("language", language);
    localStorage.setItem("soundEnabled", soundEnabled);
    localStorage.setItem("notificationsEnabled", notificationsEnabled);
    setNotification("Ustawienia zapisane");
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="settings-page flex flex-col items-center min-h-screen p-6">
      {notification && <Notification message={notification} />}
      <h1 className="text-3xl font-bold text-green-600 mb-8">Ustawienia</h1>

      <div className="setting-item mb-6 w-full max-w-md">
        <label className="block mb-2 text-lg font-medium text-gray-700">Język:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-white p-3 rounded-lg shadow-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-700">
          <option value="en">Angielski</option>
          <option value="pl">Polski</option>
        </select>
      </div>

      <div className="setting-item mb-6 w-full max-w-md">
        <label className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
          <span className="text-lg font-medium text-gray-700">Dźwięk</span>
          <input type="checkbox" checked={soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)} className="w-6 h-6 text-green-500 focus:ring-green-400 focus:ring-offset-0" />
        </label>
      </div>

      <div className="setting-item mb-6 w-full max-w-md">
        <label className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
          <span className="text-lg font-medium text-gray-700">Powiadomienia</span>
          <input type="checkbox" checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} className="w-6 h-6 text-green-500 focus:ring-green-400 focus:ring-offset-0" />
        </label>
      </div>

      <button onClick={saveSettings} className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
        Zapisz ustawienia
      </button>
    </div>
  );
}
