import { useEffect } from "react";
import { useState } from "react";

export default function useFetchTicket(ticketId) {
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTicket = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_BASE_URL}/ticket/${ticketId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "get",
        }
      );
      const resJson = await res.json();

      res.status == 200 ? setTicket(resJson.data) : setError(resJson.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return {
    ticket,
    error,
    isLoading,
  };
}
