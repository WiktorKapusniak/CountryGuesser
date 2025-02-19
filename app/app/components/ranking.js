"use client";

export default function Ranking({ users }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Ranking Użytkowników</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul>
          {users
            .sort((a, b) => b.points - a.points)
            .map((user, index) => (
              <li
                key={user.id}
                className={`flex items-center justify-between py-4 px-6 mb-3 rounded-lg ${
                  index === 0 ? "bg-yellow-200 text-yellow-800 font-extrabold" : index === 1 ? "bg-gray-200 text-gray-800 font-bold" : index === 2 ? "bg-amber-300 text-amber-800 font-semibold" : "bg-gray-100 text-gray-700"
                }`}
              >
                <span className="flex items-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4 ${index === 0 ? "bg-yellow-500 text-white" : index === 1 ? "bg-gray-400 text-white" : index === 2 ? "bg-amber-400 text-white" : "bg-gray-300 text-gray-700"}`}>
                    {index + 1}
                  </span>
                  {user.nick}
                </span>
                <span className="text-lg font-medium">{user.points} punktów</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
