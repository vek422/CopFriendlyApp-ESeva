import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER = "user";
export const TOKEN = "token";
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(`Coudnt Store the details : ${err}`);
  }
};
