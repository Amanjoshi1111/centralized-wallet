import { getDateString } from "@/lib/helper";
import { Card, CardTitle } from "./Card";

export function RecentTransaction() {

    const date = new Date();

    return <Card width="w-full" height="h-80">
        <CardTitle title={"Recent Transaction"} />
        <TransactionCard date={date} amount={200} status={Status.Pending} />
        <TransactionCard date={date} amount={200} status={Status.Success} />
        <TransactionCard date={date} amount={200} status={Status.Pending} />
        <TransactionCard date={date} amount={200} status={Status.Failed} />
        <TransactionCard date={date} amount={200} status={Status.Pending} />
        <TransactionCard date={date} amount={200} status={Status.Pending} />
    </Card>
}

enum Status {
    Pending = "Pending",
    Success = "Success",
    Failed = "Failed"
}
type TransactionCardProps = {
    date: Date,
    amount: number,
    status: Status
}

function TransactionCard({ date, amount, status }: TransactionCardProps) {

    const sign = (amount < 0) ? "-" : "+";

    return <div className="flex w-full justify-between py-2 items-center" >
        <div className="flex flex-col">
            <div>Received INR</div>
            <div className="text-xs text-gray-600">{getDateString(date)}</div>
        </div>
        <div className="flex flex-col">
            <div>{sign} Rs {amount}</div>
            <StatusBar status={status} />
        </div>
    </div>
}

function StatusBar({ status }: { status: Status }) {
    if (status == Status.Pending) {
        return <div className={`text-xs text-white bg-yellow-500 rounded-md text-center`}>{status}</div>
    } else if (status == Status.Failed) {
        return <div className={`text-xs text-white bg-red-500 rounded-md text-center`}>{status}</div>
    } else if (status == Status.Success) {
        return <div className={`text-xs text-white bg-green-500 rounded-md text-center`}>{status}</div>
    }
}