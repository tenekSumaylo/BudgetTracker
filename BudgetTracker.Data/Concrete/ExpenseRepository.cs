using BudgetTracker.Core.EFModels;
using BudgetTracker.Core.Repositories;
using BudgetTracker.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace BudgetTracker.Data.Concrete
{
    public class ExpenseRepository : IExpenseRepository<Expense>
    {
        private readonly AppDBContext _context;
        
        public ExpenseRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task AddExpense(Expense item)
        {
            await _context.AddAsync(item);
        }

        public async Task<IEnumerable<Expense>> GetExpenses()
        {
            return await _context.Expenses.AsNoTracking().ToListAsync();
        }
    }
}
