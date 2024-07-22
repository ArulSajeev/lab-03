
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TransactionContext } from "../context/TransactionContext";

const Divider = () => <View style={styles.divider} />;

const SummaryScreen = () => {
  const { transactions } = useContext(TransactionContext);

  const totalExpenses = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const totalTransactions = transactions.length;

  const highestSpendingTransaction = transactions.reduce(
    (prev, current) => (prev.amount > current.amount ? prev : current),
    { amount: -Infinity, name: "" }
  );

  const lowestSpendingTransaction = transactions.reduce(
    (prev, current) => (prev.amount < current.amount ? prev : current),
    { amount: Infinity, name: "" }
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Total Transactions:</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <Divider />
      <View style={styles.row}>
        <Text style={styles.label}>Total Expenses:</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <Divider />
      <View>
        <Text style={styles.label}>Highest Spending:</Text>
        <View style={styles.row}>
          <Text style={styles.name}>{highestSpendingTransaction.name}</Text>
          <Text style={styles.value}>
            ${highestSpendingTransaction.amount.toFixed(2)}
          </Text>
        </View>
      </View>
      <Divider />
      <View>
        <Text style={styles.label}>Lowest Spending:</Text>
        <View style={styles.row}>
          <Text style={styles.name}>{lowestSpendingTransaction.name}</Text>
          <Text style={styles.value}>
            ${lowestSpendingTransaction.amount.toFixed(2)}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  value: {
    fontSize: 16,
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: "#4682B4",
    marginVertical: 8,
  },
});

export default SummaryScreen;
