import React from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import { IncomExpenses } from './Components/IncomExpenses'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomExpenses/>
      <TransactionList/>
      <AddTransaction/>

      </div>
    </GlobalProvider>
  )
}

export default App