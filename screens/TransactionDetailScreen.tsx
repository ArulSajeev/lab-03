
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { TransactionsStackParamList } from "../navigation/TransactionsStackNavigator";

type Transaction = {
  amount: number;
  name: string;
  description: string;
  date: string;
};

type TransactionDetailScreenRouteProp = RouteProp<
  TransactionsStackParamList,
  "Transaction Detail"
>;

type Props = {
  route: TransactionDetailScreenRouteProp;
};

const Divider = () => <View style={styles.divider} />;

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.amount, styles.whiteText]}>
          ${transaction.amount}
        </Text>
        <Text style={[styles.name, styles.whiteText]}>{transaction.name}</Text>
        <Text style={[styles.description, styles.whiteText]}>
          {transaction.description}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.date}>Transaction Date:</Text>
        <Text style={[styles.date, styles.dateRightAlign]}>
          {transaction.date}
        </Text>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    backgroundColor: "#4682B4",
    padding: 15,
    marginBottom: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  date: {
    paddingLeft: 15,
    fontSize: 14,
  },
  dateRightAlign: {
    paddingRight: 15,
    textAlign: "right",
  },
  whiteText: {
    color: "white",
  },
  divider: {
    height: 1,
    backgroundColor: "#4682B4",
    marginVertical: 14,
    marginHorizontal: 6,
  },
});

export default TransactionDetailScreen;
