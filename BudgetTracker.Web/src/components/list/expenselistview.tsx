import { Button } from "../ui/button";
import { Item, 
    ItemActions, 
    ItemContent, 
    ItemDescription, 
    ItemTitle
} from "../ui/item";

const ExpenseListView = () => {
    return(
        <div>
            <ol className="list-none">
                <li>
                    <Item variant="outline">
                        <ItemContent>
                            <ItemTitle>Item Test</ItemTitle>
                            <ItemDescription>
                                This is a test item only for viewing
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <Button variant="outline" size="sm">
                                Inspect
                            </Button>
                        </ItemActions>

                    </Item>
                </li>
            </ol>
        </div>
    );
}

export default ExpenseListView;