
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "../navigation/MainTabNavigator";
import { TransactionProvider } from "../context/TransactionContext";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <TransactionProvider >
      <NavigationContainer independent={true}>
          <MainTabNavigator/>
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default App;
