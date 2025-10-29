using BudgetTracker.Core.EFModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BudgetTracker.Data.Context
{
    public class AppDBContext : IdentityDbContext
    {
        public DbSet<Expense> Expenses { get; set; }
        public AppDBContext()
        {

        }

        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
    }
}
