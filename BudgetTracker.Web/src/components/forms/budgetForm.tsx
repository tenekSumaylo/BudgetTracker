import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


function BudgetForm() {
    return(
        <div>
            <form className="flex gap-4 flex-col">
                <div className="flex flex-col">
                    <label className="p-2 font-bold"
                            htmlFor="expenselbl">Expense Label</label>
                    <Input type="text" 
                    id="expenselbl"
                    className="w-sm"
                    placeholder="Expense label"/>
                </div>
                <div className="flex flex-col">
                    <label className="p-2 font-bold"
                            htmlFor="amountlbl">Amount</label>
                    <Input type="number" 
                    id="amountlbl"
                    className="w-sm"
                    placeholder="0000.00"/>
                </div>
                <div className="flex flex-col">
                    <label className="p-2 font-bold"
                            htmlFor="reasonlbl">Reason of Expense</label>
                    <Textarea  
                    id="reasonlbl"
                    className="w-sm"
                    placeholder="Type reason here"/>
                </div>
                <Button className="w-sm">Submit Expense</Button>
            </form>
            <section>

            </section>
        </div>
    );
}

export default BudgetForm;