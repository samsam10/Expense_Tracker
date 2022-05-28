import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  // const [val, setVal] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext)

const onSubmit = e => {
  e.preventDefault();
  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
}
addTransaction(newTransaction);

setText('')
setAmount('')

//the commented part copies from task manager app. give u headstart on how to clear the form
// f(!text){
//   alert('please add a task')
//   return

//   onAdd({text, day, reminder})


//   // clearing the form
//   setText('')
//   setDay('')
//   setReminder(false)
// }
// }
}



  return (
    <> 
      <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                  <div className="form-control">
                        <label htmlFor="text">Text</label>
  <input type="text" id='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                  </div>

                  <div className="form-control">
                      <label htmlFor="amount">Amount <br />
                          (negative - expense, positive - income)
                      </label>
                      
  <input type="number" id='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                  
                  </div>

                  <button className="btn" value={text}>Add transaction</button>

                  {/* <button className="btn" id={text} onClick={(e)=> setText(()=>"")}>Add transaction</button> */}
            </form>
    </>
  )
}
