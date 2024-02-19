import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocalData from "@/hooks/useLocalData";
import { TOKEN } from "@/storage";
export default function first() {
  // const [token, setToken] = useLocalData(TOKEN);
  // console.log(token);
  return (
    <SafeAreaView>
      <Text>First Page</Text>
    </SafeAreaView>
  );
}
