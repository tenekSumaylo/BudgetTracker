using BudgetTracker.Core.EFModels;
using BudgetTracker.Core.Repositories;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BudgetTracker.Core.ExpenseServices.Concrete
{
    public class ExpenseService : IExpenseService
    {
        private readonly IExpenseRepository<Expense> _expenseRepository;
        
        public ExpenseService(IExpenseRepository<Expense> expenseRepository)
        {
            _expenseRepository = expenseRepository;
        }   

        public void AddExpense()
        {
            throw new NotImplementedException();
        }

        public async Task GetExpenses()
        {
            var expenses = await _expenseRepository.GetExpenses();    
        }
    }
}
