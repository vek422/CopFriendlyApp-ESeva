import { useState } from "react";
import axios from "axios";
import { router } from "expo-router";
const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const handleRegister = async ({ email, password, firstName, lastName }) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_BASE_URL + "/auth/register",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (res.status != 201) {
        setError(data.message);
      } else {
        setData(data);
        router.replace("/(tabs)/");
      }
    } catch (err) {
      console.log(err);
      setError("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, handleRegister };
};

export default useRegister;
