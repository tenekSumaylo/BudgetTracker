import './App.css'
import BudgetForm from './components/forms/budgetForm'
import BudgetHeader from './components/layout/header'
import ExpenseListView from './components/list/expenselistview'

function App() {
  return (
    <>
    <div className="flex justify-start min-h-screen min-w-screen flex-col gap-10">
      <header>
        <BudgetHeader/>
      </header>
      <section className='pl-10 grid grid-cols-2 pr-10'>
        <BudgetForm/>
        <ExpenseListView/>
      </section>


    </div>
    </>
  )
}

export default App
