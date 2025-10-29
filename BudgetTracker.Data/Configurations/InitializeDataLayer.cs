using BudgetTracker.Core.EFModels;
using BudgetTracker.Core.Repositories;
using BudgetTracker.Data.Concrete;
using BudgetTracker.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BudgetTracker.Data.Configurations
{
    public static class InitializeDataLayer
    {
        public static void InitializeDataLayerMethod(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<AppDBContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<IExpenseRepository<Expense>, ExpenseRepository>();
        }
    }
}
