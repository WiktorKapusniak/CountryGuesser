"use client";
import Link from "next/link";
export default function DifficultySelectionText() {
  const difficulties = [
    {
      level: "Łatwy",
      description: "Odgadnij kraje w Europie. Idealne dla początkujących!",
      href: "/mainpage/tekstowy/easy",
      color: "bg-green-200",
    },
    {
      level: "Średni",
      description: "Sprawdź swoją wiedzę na temat krajów Azji",
      href: "/mainpage/tekstowy/medium",
      color: "bg-yellow-200",
    },
    {
      level: "Trudny",
      description: "Odgadnij kraje w Afryce. Tylko dla ekspertów!",
      href: "/mainpage/tekstowy/hard",
      color: "bg-red-200",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center pt-16">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">Wybierz poziom trudności</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-gray-600">
        {difficulties.map((difficulty) => (
          <div key={difficulty.level} className={`rounded-lg shadow-lg p-6 ${difficulty.color} flex flex-col justify-between`}>
            <h2 className="text-xl font-bold text-center mb-4">{difficulty.level}</h2>
            <p className="text-center mb-4">{difficulty.description}</p>
            <Link href={difficulty.href} className="bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md font-bold">
              Wybierz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
