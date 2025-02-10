'use client';
import { Button } from "./Button";
import { Card, CardTitle } from "./Card";
import { useState } from "react";
import { Provider } from "@repo/db/client";
import { initiateOnRampTransaction } from "@/lib/actions/onRampTransaction";

export function AppMoney() {

    const [amount, setAmount] = useState<number | null>(null);
    const [provider, setProvider] = useState<Provider>(Provider.Hdfc);

    const selectProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProvider(e.target.value as Provider);
    }

    const onClick = async () => {
        if (!amount) {
            alert("Please enter amount");
            return;
        }
        await initiateOnRampTransaction(amount, provider);
    }

    return <Card height="h-80" width="w-1/2">
        <CardTitle title={"Add Money"} />
        <div className="py-2" >Amount</div>
        <input className="w-full border py-2 px-4 rounded-lg appearance-none" type="number" placeholder="Enter your amount" onChange={(e) => setAmount(Number(e.target.value))} />
        <div className="py-2" >Bank</div>
        <select className="w-full py-2 px-4 border rounded-lg appearance-none" name="providers" id="providers" onChange={selectProvider}>
            <option value={Provider.Hdfc}>HDFC Bank</option>
            <option value={Provider.Axis}>AXIS Bank</option>
        </select>
        <div className="py-8 flex justify-center">
            <Button text="Add Money" onButtonClick={onClick} />
        </div>
    </Card>
}