

namespace BudgetTracker.Core.Repositories
{
    public interface IExpenseRepository<TEntity>
    {
        Task AddExpense(TEntity item);
        Task<IEnumerable<TEntity>> GetExpenses();
    }
}
