using BudgetTracker.Core.EFModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BudgetTracker.Core.ExpenseServices
{
    public interface IExpenseService
    {
        Task AddExpense(Expense data);
        Task<IEnumerable<Expense>> GetExpenses();
    }
}
