import { setLogout } from "@/redux/reducers/authReducer";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UseSelector, useDispatch, useSelector } from "react-redux";

export default () => {
  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};
