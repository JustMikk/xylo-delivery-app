import { Stack } from "expo-router";
import "../app/globals.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="screens/splash1"
    >
      <Stack.Screen name="screens/splash1" />
      <Stack.Screen name="screens/splash2" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
