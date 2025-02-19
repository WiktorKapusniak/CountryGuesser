"use client";

import { useState, useEffect } from "react";

export default function Store() {
  const [points, setPoints] = useState(0);
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [profileBackground, setProfileBackground] = useState(null);

  const storeItems = {
    avatars: [
      { id: "/boy-avatar.png", name: "Avatar Niebieski", image: "/boy-avatar.png", pointsRequired: 500 },
      { id: "/girl-avatar.png", name: "Avatar Różowy", image: "/girl-avatar.png", pointsRequired: 1000 },
    ],
    backgrounds: [
      { id: "/mountain_background.jpg", name: "Tło Górskie", image: "/mountain_background.jpg", pointsRequired: 700 },
      { id: "/sea_background.jpg", name: "Tło Morskie", image: "/sea_background.jpg", pointsRequired: 1200 },
    ],
  };

  useEffect(() => {
    const storedPoints = parseInt(localStorage.getItem("points")) || 0;
    const storedAvatar = localStorage.getItem("profileAvatar") || null;
    const storedBackground = localStorage.getItem("profileBackground") || null;

    setPoints(storedPoints);
    setProfileAvatar(storedAvatar);
    setProfileBackground(storedBackground);
  }, []);

  const handleSetItem = (itemId, pointsRequired, type) => {
    if (points >= pointsRequired) {
      if (type === "avatar") {
        setProfileAvatar(itemId);
        localStorage.setItem("profileAvatar", itemId);
      } else {
        setProfileBackground(itemId);
        localStorage.setItem("profileBackground", itemId);
      }
    } else {
      alert(`Brak wystarczającej liczby punktów! Wymaga: ${pointsRequired} pkt`);
    }
  };

  return (
    <div className="container mx-auto mt-12 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Sklep</h1>
      <p className="text-lg mb-6 text-gray-700">Punkty: {points}</p>

      {/* Sekcja Avatary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Avatary</h2>
        <div className="grid grid-cols-2 gap-4">
          {storeItems.avatars.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-gray-700">
              <div className="flex justify-center items-center h-32 mb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover border" />
              </div>
              <h3 className="text-xl font-semibold text-center">{item.name}</h3>
              {profileAvatar === item.id ? (
                <p className="text-green-600 font-bold text-center mt-2">Ustawiony</p>
              ) : (
                <button
                  onClick={() => handleSetItem(item.id, item.pointsRequired, "avatar")}
                  className={`${points >= item.pointsRequired ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"} px-4 py-2 rounded mt-2`}
                  disabled={points < item.pointsRequired}
                >
                  Ustaw: {item.pointsRequired} pkt
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sekcja Tła */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Tła</h2>
        <div className="grid grid-cols-2 gap-4">
          {storeItems.backgrounds.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow text-gray-700">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4 rounded-md border" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              {profileBackground === item.id ? (
                <p className="text-green-600 font-bold">Ustawione</p>
              ) : (
                <button
                  onClick={() => handleSetItem(item.id, item.pointsRequired, "background")}
                  className={`${points >= item.pointsRequired ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"} px-4 py-2 rounded mt-2`}
                  disabled={points < item.pointsRequired}
                >
                  Ustaw: {item.pointsRequired} pkt
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
