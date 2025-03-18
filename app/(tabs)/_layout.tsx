import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="menu"
        options={{ headerShown: false, title: "Menu" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favourites"
        options={{ headerShown: false, title: "Favourites" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="my_orders"
        options={{ headerShown: false, title: "My Orders" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="help"
        options={{ headerShown: false, title: "Help" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default layout;
