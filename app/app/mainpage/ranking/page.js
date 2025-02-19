"use client";

import { useEffect, useState } from "react";
import Ranking from "@/app/components/ranking";
export default function RankingPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/ranking.json");
        if (!response.ok) {
          throw new Error("Błąd podczas ładowania danych");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Błąd podczas ładowania danych:", error);
      }
    };

    fetchUsers();
  }, []);

  return <Ranking users={users} />;
}
