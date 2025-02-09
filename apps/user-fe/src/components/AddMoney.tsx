import { Button } from "./Button";
import { Card, CardTitle } from "./Card";

export function AppMoney() {
    return <Card height="h-80" width="w-1/2">
        <CardTitle title={"Add Money"} />
        <div className="py-2" >Amount</div>
        <input className="w-full border py-2 px-4 rounded-lg appearance-none" type="number" placeholder="Enter your amount" />
        <div className="py-2" >Bank</div>
        <select className="w-full py-2 px-4 border rounded-lg appearance-none" name="providers" id="providers">
            <option value="hdfc">HDFC</option>
        </select>
        <div className="py-8 flex justify-center">
            <Button text="Add Money" />
        </div>
    </Card>
}