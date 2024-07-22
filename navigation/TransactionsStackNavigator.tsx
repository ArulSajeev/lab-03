
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsListScreen from "../screens/TransactionsListScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";
import { Transaction } from "@/types/Transaction";

export type TransactionsStackParamList = {
  "Transactions List": undefined;
  "Transaction Detail": { transaction: Transaction };
};

const Stack = createStackNavigator<TransactionsStackParamList>();

const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transactions List"
        component={TransactionsListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
