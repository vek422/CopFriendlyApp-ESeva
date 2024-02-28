import { useState } from "react";
import axios from "axios";
import { router, Redirect } from "expo-router";
import useLocalData from "@/hooks/useLocalData";
import { TOKEN, USER } from "@/storage";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "@/redux/reducers/authReducer";
const useLogin = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [data, setData] = useState(null);
  // const [token, setToken] = useLocalData(TOKEN);
  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_BASE_URL + "/auth/login",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (res.status != 201) {
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

  return { isLoading, error, handleLogin };
};

export default useLogin;
