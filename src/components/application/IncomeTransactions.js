import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';

const IncomeTransactions = ({incomeTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className="transaction">
        <span className="transaction-text">{incomeTransaction.text}</span>
        <span className="transaction=amount">{incomeTransaction.amount}</span>
        <button className="delete-btn" onClick={()=> deleteTransaction(incomeTransaction.id)}>
            <i className="fas fa-trash"></i>
        </button>

    </li>
    )
}

export default IncomeTransactions;
