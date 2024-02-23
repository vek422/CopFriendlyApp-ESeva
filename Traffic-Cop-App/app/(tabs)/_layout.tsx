import { Redirect, Tabs } from "expo-router";
import { useSelector } from "react-redux";
import { router } from "expo-router";
export default () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.user);
  if (!user || !token) router.replace("/(auth)/");
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="index" options={{ title: "About" }} />
    </Tabs>
  );
};
