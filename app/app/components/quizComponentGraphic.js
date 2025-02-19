"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Notification from "./notification";

export default function QuizComponent({ countries }) {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = parseInt(localStorage.getItem("currentQuestionIndex"), 10);
      if (!isNaN(savedIndex) && savedIndex < countries.length) {
        setCurrentQuestionIndex(savedIndex);
      }
    }
  }, [countries]);

  const currentQuestion = countries[currentQuestionIndex];

  const getPoints = () => (typeof window !== "undefined" ? parseInt(localStorage.getItem("points")) || 0 : 0);
  const updatePoints = (newPoints) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("points", newPoints);
    }
  };

  const handleAnswer = () => {
    if (currentQuestion?.correctAnswer.some((answer) => answer.toLowerCase() === userAnswer.trim().toLowerCase())) {
      setScore((prevScore) => prevScore + 1);
      const difficultyPoints = currentQuestion.difficulty === "easy" ? 50 : currentQuestion.difficulty === "medium" ? 100 : 150;
      updatePoints(getPoints() + difficultyPoints);

      setCurrentQuestionIndex((prev) => {
        const newIndex = prev + 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("currentQuestionIndex", newIndex);
        }
        return newIndex;
      });

      setUserAnswer("");
      setHintVisible(false);
    } else {
      setNotification("Niepoprawna odpowiedź");
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleHint = () => {
    const currentPoints = getPoints();
    if (currentPoints >= 100) {
      updatePoints(currentPoints - 100);
      setHintVisible(true);
    } else {
      setNotification("Za mało punktów, by kupić podpowiedź");
    }
  };

  const handleZakoncz = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentQuestionIndex", 0);
    }
    router.push(`/mainpage/graficzny/${countries[0]?.difficulty}`);
  };

  return (
    <div className="quiz-container flex flex-col items-center justify-top pt-20 min-h-screen px-4 sm:px-6 lg:px-8">
      {notification && <Notification message={notification} />}
      {currentQuestion ? (
        <div className="question bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{currentQuestion.question}</h2>
          <div className="flex justify-center mb-6">
            <img src={currentQuestion.flag || "/default-flag.png"} alt={`Flaga ${currentQuestion.country}`} className="w-40 h-28 sm:w-60 sm:h-40 rounded-lg border border-gray-300" />
          </div>
          {hintVisible && <p className="text-green-600 font-semibold mb-4">Podpowiedź: {currentQuestion.hint}</p>}
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAnswer()}
            placeholder="Twoja odpowiedź"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
          />
          <div className="flex justify-between mt-4">
            <button onClick={handleAnswer} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Zatwierdź
            </button>
            <button onClick={handleHint} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Kup podpowiedź (100 pkt)
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Koniec quizu!</h2>
          <p className="text-xl text-gray-700">
            Twój wynik: <span className="font-bold text-green-600">{countries.length}</span>/{countries.length}
          </p>
          <button onClick={handleZakoncz} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Zakończ
          </button>
        </div>
      )}
    </div>
  );
}
