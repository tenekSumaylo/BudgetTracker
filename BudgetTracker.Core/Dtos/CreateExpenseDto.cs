﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BudgetTracker.Core.Dtos
{
    public sealed record CreateExpenseDto(string Title, 
            string Description,
            double Amount);
}
