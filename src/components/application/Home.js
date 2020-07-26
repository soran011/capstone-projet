import React, { useState, useEffect } from "react";
import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import { GlobalContextProvider } from "../../context/GlobalState";
import "./Home.scss";
import Axios from "axios";

const Home = ({ token }) => {
  const [userData, setUserData] = useState({
    transactions: [],
    email: "",
    name: "",
  });
  console.log(userData);
  useEffect(() => {
    async function fetchUserData(params) {
      const result = await Axios.get("http://localhost:8080/me", {
        headers: {
          "auth-token": token,
        },
      });
      setUserData(result.data);
    }
    fetchUserData();
  }, []);
  console.log(userData.transactions);
  const balance = userData.transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const incomeTransactions = userData.transactions.filter(
    (transaction) => transaction.amount > 0
  );
  const income = incomeTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const expenseTransactions = userData.transactions.filter(
    (transaction) => transaction.amount < 0
  );
  const expense = expenseTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance balance={balance} income={income} expense={expense} />
          <AddTransaction transactions={userData} />
          <IncomeList incomeTransactions={incomeTransactions}/>
          <ExpenseList expenseTransactions={expenseTransactions} />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default Home;
