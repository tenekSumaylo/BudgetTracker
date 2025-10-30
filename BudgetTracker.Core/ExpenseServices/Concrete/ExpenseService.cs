using BudgetTracker.Core.Dtos;
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

        public async Task AddExpense(Expense data)
        {
            data.UserId = 1; // Hardcoded user ID for demonstration purposes 
            await _expenseRepository.AddExpense(data);
        }

        public async Task<IEnumerable<Expense>> GetExpenses()
        {
            return await _expenseRepository.GetExpenses();   
        }
    }
}
