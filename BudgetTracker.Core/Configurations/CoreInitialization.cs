using BudgetTracker.Core.ExpenseServices;
using BudgetTracker.Core.ExpenseServices.Concrete;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BudgetTracker.Core.Configurations
{
    public static class CoreInitialization
    {
        public static void InitializeCoreServices(this IServiceCollection services)
        {
            services.AddScoped<IExpenseService, ExpenseService>();
        }
    }
}
