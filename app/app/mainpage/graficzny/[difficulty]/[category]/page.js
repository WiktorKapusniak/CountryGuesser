"use client";

import { useState, useEffect } from "react";
import QuizComponent from "@/app/components/quizComponentGraphic";

export default function Page({ params }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { difficulty, category } = await params;

      try {
        const response = await fetch("/graphicCountries.json");
        if (!response.ok) throw new Error("Błąd ładowania danych");

        const data = await response.json();
        const filteredCountries = data.filter((country) => country.category.toLowerCase() === category.toLowerCase() && country.difficulty.toLowerCase() === difficulty);

        // Pobieranie flagi dla każdego kraju
        const countriesWithFlags = await Promise.all(
          filteredCountries.map(async (country) => {
            try {
              const flagResponse = await fetch(`https://restcountries.com/v3.1/name/${country.country}`);
              if (!flagResponse.ok) throw new Error(`Nie znaleziono flagi dla ${country.country}`);

              const flagData = await flagResponse.json();
              return { ...country, flag: flagData[0]?.flags?.png || "" };
            } catch (error) {
              console.error(error);
              return { ...country, flag: "" };
            }
          })
        );

        setCountries(countriesWithFlags);
      } catch (error) {
        console.error("Błąd ładowania danych:", error);
      }
    };

    fetchData();
  }, [params]);

  return countries.length > 0 ? <QuizComponent countries={countries} /> : <p>Ładowanie...</p>;
}
