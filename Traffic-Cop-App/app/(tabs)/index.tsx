import { setLogout } from "@/redux/reducers/authReducer";
import { View, Text, Pressable } from "react-native";
import { UseSelector, useDispatch, useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <View>
      <Text>Hello</Text>
      <Pressable onPress={() => dispatch(setLogout())}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};
