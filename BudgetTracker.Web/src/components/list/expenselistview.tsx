import { Button } from "../ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../ui/item";
import type { ExpenseList } from "../models/expense";
import { Pagination } from "../ui/pagination";

const ExpenseListView = ({ expenses }: ExpenseList) => {
  return (
    <div>
      <ol className="list-none">
        {expenses.map((exp) => (
          <li key={exp.Id}>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>
                  {exp.expenseLabel} - {exp.amount}
                </ItemTitle>
                <ItemDescription>{exp.reasonOfExpense}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Inspect
                </Button>
              </ItemActions>
            </Item>
          </li>
        ))}
      </ol>
      <Pagination/>
    </div>
  );
};

export default ExpenseListView;
