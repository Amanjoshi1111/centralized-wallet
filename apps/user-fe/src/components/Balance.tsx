import { Card, CardTitle } from "./Card";

export function Balance() {

    const unlockedBalance = 200;
    const lockedBalance = 0;
    const totalBalance = unlockedBalance + lockedBalance;

    return <Card width="w-full">
        <CardTitle title={"Balance"} />
        <AmountCard title="Unlocked balance" amount={unlockedBalance} />
        <AmountCard title="Locked balance" amount={lockedBalance} />
        <AmountCard title="Total balance" amount={totalBalance} />
    </Card>

}

function AmountCard({ title, amount }: { title: string, amount: number }) {
    return <div className="flex justify-between py-2 border-b" >
        <div>{title}</div>
        <div>{amount} INR</div>
    </div>
}