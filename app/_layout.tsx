import { Stack } from "expo-router";
import "./globals.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="screens/splash1" />
      <Stack.Screen name="screens/splash2" />
      <Stack.Screen name="screens/onboarding1" />
      <Stack.Screen name="screens/onboarding2" />
      <Stack.Screen name="screens/onboarding3" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
