using BudgetTracker.Core.EFModels;

namespace BudgetTracker.Core.EFModels
{
    public class Expense
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Amount { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }

    }
}
