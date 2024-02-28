import { useState } from "react";
import axios from "axios";
import { Redirect, router } from "expo-router";
import { setLogin } from "@/redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const handleRegister = async ({ email, password, firstName, lastName }) => {
    setIsLoading(true);
    setError(null);
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
        console.log("has error in register");
        setError(data.message);
      } else {
        dispatch(setLogin({ user: data.user, token: data.token }));
        router.replace("/(tabs)/");
      }
    } catch (err) {
      console.log(err);
      setError("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleRegister };
};

export default useRegister;
