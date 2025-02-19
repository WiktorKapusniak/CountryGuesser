"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategorySelector() {
  const difficulty = useParams().difficulty;

  const kafelki = [
    {
      difficulty: "easy",
      img: "/europa.png",
      description: "Odgadnij kraje w Europie",
      href: "/mainpage/graficzny/easy/europa",
    },
    {
      difficulty: "easy",
      img: "/azja.png",
      description: "Odgadnij kraje w Azji",
      href: "/mainpage/graficzny/easy/azja",
    },
    {
      difficulty: "medium",
      img: "/amerykaPoludniowa.png",
      description: "Sprawdź swoją wiedzę na temat Ameryki Południowej",
      href: "/mainpage/graficzny/medium/amerykaPoludniowa",
    },
    {
      difficulty: "medium",
      img: "/amerykaPolnocna.png",
      description: "Sprawdź swoją wiedzę na temat Ameryki Północnej",
      href: "/mainpage/graficzny/medium/amerykaPolnocna",
    },
    {
      difficulty: "hard",
      img: "/afryka.png",
      description: "Odgadnij kraje w Afryce",
      href: "/mainpage/graficzny/hard/afryka",
    },
    {
      difficulty: "hard",
      img: "/australia.png",
      description: "Odgadnij kraje w Australii i Oceanii",
      href: "/mainpage/graficzny/hard/australia",
    },
  ];

  // Filtrujemy kafelki na podstawie poziomu trudności
  const filteredKafelki = kafelki.filter((kafelek) => kafelek.difficulty === difficulty);

  return (
    <main>
      <div className="flex flex-col items-center justify-center text-gray-700 font-bold pt-5">
        <p className="text-lg">Wybierz interesującą Cię kategorię z poniższych:</p>
      </div>
      <div className="flex justify-center items-start min-h-screen pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {filteredKafelki.map((kafelek, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={kafelek.img} alt={kafelek.description} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{kafelek.description}</h2>
                <Link href={kafelek.href}>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Wybierz</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
