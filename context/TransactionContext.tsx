
import React, { createContext, useState, ReactNode } from "react";
import { Transaction } from "../types/Transaction";
import { mockTransactions } from "../utils/mockData";

type TransactionContextType = {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

export const TransactionContext = createContext<TransactionContextType>({
  transactions: [],
  setTransactions: () => {},
});

type TransactionProviderProps = {
  children: ReactNode;
};

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
