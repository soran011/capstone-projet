import React from 'react'

const AddTransaction = () => {
    return (
        <div className="form-wrapper">
            <form className="input-group income">
                <input type="text" placeholder="Add Income" autoComplete="off"/>
                <input type="number" placeholder="Amount" autoComplete="off"/>
                <input type="submit" value="Submit"/>
            </form>
            <form className="input-group expense">
                <input type="text" placeholder="Add Expense" autoComplete="off"/>
                <input type="number" placeholder="Amount" autoComplete="off"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddTransaction 
