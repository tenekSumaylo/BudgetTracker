import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ExpenseRequest } from "../models/expense";

function BudgetForm() {
  const initialExpense: ExpenseRequest = {
    amount: 0,
    expenseLabel: "",
    reasonOfExpense: "",
  };

  const submitExpense = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setExpense(initialExpense);
  };

  const resetForm = () => setExpense(initialExpense);
  const [expense, setExpense] = useState<ExpenseRequest>(initialExpense);
  return (
    <div>
      <form className="flex gap-4 flex-col" onSubmit={submitExpense}>
        <div className="flex flex-col">
          <label className="p-2 font-bold" htmlFor="expenselbl">
            Expense Label
          </label>
          <Input
            type="text"
            id="expenselbl"
            className="w-sm"
            placeholder="Expense label"
            value={expense.expenseLabel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setExpense((prev) => ({
                ...prev,
                expenseLabel: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="p-2 font-bold" htmlFor="amountlbl">
            Amount
          </label>
          <Input
            type="number"
            id="amountlbl"
            className="w-sm"
            placeholder="0000.00"
            value={expense.amount}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setExpense((prev) => ({
                ...prev,
                amount: Number(event.target.value),
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="p-2 font-bold" htmlFor="reasonlbl">
            Reason of Expense
          </label>
          <Textarea
            id="reasonlbl"
            className="w-sm"
            placeholder="Type reason here"
            value={expense.reasonOfExpense}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setExpense((val) => ({
                ...val,
                reasonOfExpense: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button className="w-3xs" type="submit">
            Submit Expense
          </Button>
          <Button type="reset" className="w-28" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </form>
      <section></section>
    </div>
  );
}

export default BudgetForm;
