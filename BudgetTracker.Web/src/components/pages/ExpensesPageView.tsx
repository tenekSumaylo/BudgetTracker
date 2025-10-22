import { useState } from "react";
import BudgetForm from "../forms/budgetForm";
import BudgetHeader from "../layout/header";
import ExpenseListView from "../list/expenselistview";
import type { ExpenseResponse } from "../models/expense";
const ExpensesPageView = () => {
  const [expenses, setExpenses] = useState<ExpenseResponse[]>([]);
  <div className="flex justify-start min-h-screen min-w-screen flex-col gap-10">
    <header>
      <BudgetHeader />
    </header>
    <section className="pl-10 grid grid-cols-2 pr-10">
      <BudgetForm />
      <ExpenseListView expenses={expenses} />
    </section>
  </div>;
};

export default ExpensesPageView;
