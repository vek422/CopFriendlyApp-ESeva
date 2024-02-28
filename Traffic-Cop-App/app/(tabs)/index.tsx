import { COLORS } from "@/constants/Colors";
import { setLogout } from "@/redux/reducers/authReducer";
import { router } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        padding: 10,
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.userTitle}>
          {user.firstName} {user.lastName}
        </Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            router.replace("/(auth)/");
            dispatch(setLogout());
          }}
          style={{
            backgroundColor: COLORS.tertiary,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "700",
  },
  container: {
    gap: 20,
  },
  useTitle: {
    fontSize: 15,
  },
});
