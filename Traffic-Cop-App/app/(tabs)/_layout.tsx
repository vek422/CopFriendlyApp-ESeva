import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="second" />
      <Tabs.Screen name="third" />
      <Tabs.Screen name="index" />
    </Tabs>
  );
};
