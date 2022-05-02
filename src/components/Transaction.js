import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

  const {deleteTransaction} = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-': '+';

  const deleteT = () =>{
    deleteTransaction(transaction.id)
  }

  return (
    <div>

<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}N{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={deleteT}>x</button>
          </li>
    </div>
  )
}
