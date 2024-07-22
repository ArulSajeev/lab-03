
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Transaction } from "../types/Transaction";

const TransactionListItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{transaction.name}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.arrow}>{">"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textContainer: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    marginRight: 8,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontWeight: "bold", 
    marginRight: 8,
  },
  arrow: {
    fontSize: 20,
    color: "#555",
  },
});

export default TransactionListItem;
