import { Button } from "../ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../ui/item";
import type { ExpenseList } from "../models/expense";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const ExpenseListView = ({ expenses }: ExpenseList) => {
  return (
    <div className="grid grid-rows-[90%, auto] content-between items-center justify-items-center h-120 pt-20">
      <div className="self-center">
        <ol className="list-none">
          {expenses && expenses.length > 0 ? (
            expenses.map((exp) => (
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
            ))
          ) : (
            <img
              className="justify-self-center self-center"
              width={200}
              height={200}
              src="https://cdn-icons-png.flaticon.com/512/1178/1178479.png"
            />
          )}
        </ol>
      </div>
      <footer>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </div>
  );
  /*
    <div className="grid grid-rows-[90%,auto] h-120 justify-center content-center bg-pink-50">
      <div className="bg-red-100">
        <ol className="list-none h-72">
          {expenses && expenses.length > 0 ? (
            expenses.map((exp) => (
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
            ))
          ) : (
            <div>No items found</div>
          )}
        </ol>
      </div>
      <div className="w-full h-full bg-yellow-50">
        <Pagination className="h-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ); */
};

export default ExpenseListView;
