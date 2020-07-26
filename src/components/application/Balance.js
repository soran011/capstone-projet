import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = ({ balance = 0, income, expense }) => {

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${balance.toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${income}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
