import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = async (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const options = {
    url: process.env.BACKEND_BASE_URL + endpoint,
    ...query,
  };
  try {
    const res = await axios.request(options);
    setData(res.data);
  } catch (err) {
  } finally {
  }
};
