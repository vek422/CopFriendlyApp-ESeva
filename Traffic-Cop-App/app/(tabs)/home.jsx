import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import useLocalData from "@/hooks/useLocalData";
import { TOKEN } from "@/storage";
import { COLORS } from "@/constants/Colors";
import { Link, router } from "expo-router";
export default function home() {
  return (
    <SafeAreaView style={{ alignItems: "center", gap: 10, marginTop: 50 }}>
      <Link
        href={"/register-violation"}
        asChild
        style={{
          padding: 10,
          backgroundColor: COLORS.secondary,
          width: 250,
        }}
      >
        <Text style={{ textAlign: "center", color: COLORS.white }}>
          Register an Violation
        </Text>
      </Link>
      <Link
        href={"/ticket/ticket-list"}
        asChild
        style={{ padding: 10, backgroundColor: COLORS.secondary, width: 250 }}
      >
        <Text style={{ textAlign: "center", color: COLORS.white }}>
          View Issued Tickets
        </Text>
      </Link>
      {/* Section for recent Activities */}
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: COLORS.gray2,
          marginTop: 20,
        }}
      ></View>
    </SafeAreaView>
  );
}
