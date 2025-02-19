"use client";

import { useState, useEffect } from "react";
import QuizComponent from "@/app/components/quizComponentText";

export default function Page({ params }) {
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setDifficulty(resolvedParams.difficulty);
      setCategory(resolvedParams.category);
    }

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!difficulty || !category) return;

    const fetchData = async () => {
      try {
        const response = await fetch("/graphicCountries.json");
        if (!response.ok) {
          throw new Error("Błąd ładowania danych");
        }
        const data = await response.json();
        const filteredCountries = data.filter((country) => country.category.toLowerCase() === category.toLowerCase() && country.difficulty.toLowerCase() === difficulty);
        setCountries(filteredCountries);
      } catch (error) {
        console.error("Błąd ładowania danych:", error);
      }
    };

    fetchData();
  }, [difficulty, category]);

  if (!difficulty || !category) return <p>Ładowanie...</p>;

  return <QuizComponent countries={countries} />;
}
