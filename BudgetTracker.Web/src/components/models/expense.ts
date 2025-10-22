export type ExpenseRequest =  {
    expenseLabel : string,
    amount : number,
    reasonOfExpense : string,
    //dateOfExpense : Date
};

export type ExpenseResponse = {
    Id : number,
    expenseLabel : string,
    amount : number,
    reasonOfExpense : string,
    dateOfExpense : Date
};

export type ExpenseList = {
    expenses : ExpenseResponse[]
};

