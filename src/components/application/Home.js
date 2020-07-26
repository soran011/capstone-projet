import React from 'react';
import Header from './Header';
import Balance from './Balance';
import AddTransaction from './AddTransaction'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'
import { GlobalContextProvider } from '../../context/GlobalState'
import './Home.scss';

const Home = () => {
    return (
        <GlobalContextProvider>
        <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <Balance />
                    <AddTransaction />
                    <IncomeList />
                    <ExpenseList />
                </div>
        </div>
        </GlobalContextProvider>
    );
};

export default Home
