
import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TransactionContext } from "../context/TransactionContext";
import TransactionListItem from "../components/TransactionListItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { TransactionsStackParamList } from "../navigation/TransactionsStackNavigator";

type TransactionsListScreenNavigationProp = StackNavigationProp<
  TransactionsStackParamList,
  "Transactions List"
>;

const TransactionsListScreen = () => {
  const { transactions } = useContext(TransactionContext);
  const navigation = useNavigation<TransactionsListScreenNavigationProp>();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Transaction Detail", { transaction: item })
            }
          >
            <TransactionListItem transaction={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionsListScreen;
