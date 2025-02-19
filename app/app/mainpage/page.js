import Link from "next/link";
export default function MainPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center text-gray-700 font-bold ">
        <h1 className="text-xl ">Witaj na stronie głównej Country Guesser!</h1>
        <p className="text-lg">Wybierz interesującą Cię kategorię z poniższych.</p>
      </div>
      <div className="flex justify-center items-start min-h-screen  pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/earth.webp" alt="Tryb graficzny" className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Tryb Graficzny</h2>
              <p className="text-gray-600 mb-4">Rozpoznawaj kraje na podstawie flag. Sprawdź swoją wiedzę i baw się dobrze!</p>
              <Link href="mainpage/graficzny">
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Wybierz</button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/tryb_tekstowy.webp" alt="Tryb tekstowy" className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Tryb Tekstowy</h2>
              <p className="text-gray-600 mb-4">Rozwiąż quiz, odpowiadając na pytania tekstowe związane z różnymi krajami. Gotowy na wyzwanie?</p>
              <Link href="mainpage/tekstowy">
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Wybierz</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
