using BudgetTracker.Core.Dtos;
using BudgetTracker.Core.ExpenseServices;
using Microsoft.AspNetCore.Mvc;


namespace BudgetTracker.Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpenseService _expenseService;

        public ExpensesController(IExpenseService expenseService) => _expenseService = expenseService;

        [HttpGet]
        public async Task<IActionResult> GetExpenses()
        {
            var data = await _expenseService.GetExpenses();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> AddExpense(CreateExpenseDto dto)
        {
            await _expenseService.AddExpense(new Core.EFModels.Expense
            {
                Title = dto.Title,
                Amount = dto.Amount,
                Description = dto.Description
            });
            return Ok();
        }
    }
}

