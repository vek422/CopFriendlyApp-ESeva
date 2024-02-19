import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { storeData } from "../storage";

export default function useLocalData(key) {
  const [data, setData] = useState(null);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Data stored");
    } catch (err) {
      console.log(`Error storing ${key} -> ${err}`);
    }
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem(key);
      console.log(`${key} -> ${data}`);
      setData(data);
    } catch (err) {
      console.log(`error retrieving ${key} -> ${err}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, storeData];
}
