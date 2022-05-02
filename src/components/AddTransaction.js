import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const textChange = (e) => {
    setText(e.target.value)
  }

  const amountChange = (e) => {
    setAmount(e.target.value)
  }

  const submitTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }
  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input type="text" value={text} placeholder="Enter text..." onChange={textChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={amountChange}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
