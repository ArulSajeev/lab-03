import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsStackNavigator from "./TransactionsStackNavigator";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons"; // If using Expo
// import Ionicons from "react-native-vector-icons/Ionicons"; // If not using Expo

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap | undefined;

          if (route.name === "Transactions") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Summary") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          }

          return iconName ? (
            <Ionicons name={iconName} size={size} color={color} />
          ) : null;
        },
        tabBarActiveTintColor: "#4682B4",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { display: "flex" },
      })}
    >
      <Tab.Screen name="Transactions" component={TransactionsStackNavigator} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
