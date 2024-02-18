import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
        <Text>HelloWorld!!!!!</Text>
      </SafeAreaView>
    </>
  );
}
