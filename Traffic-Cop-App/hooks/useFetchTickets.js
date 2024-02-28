import { useState, useEffect } from "react";
export default function useFetchTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);
  const fetchTickets = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_BASE_URL + "/ticket/getTickets",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "get",
        }
      );
      const resJson = await res.json();
      if (res.status != 200) {
        setError(resJson.message);
      } else {
        setTickets(resJson.tickets);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    tickets,
    error,
    isLoading,
    fetchTickets,
  };
}
