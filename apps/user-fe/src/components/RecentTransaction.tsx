
'use client';
import { getDateString } from "@/lib/helper";
import { Card, CardTitle } from "./Card";
import { OnRampStatus, Prisma, prisma } from "@repo/db/client";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnRampTransactions } from "@/redux/slices/onRampTransactionSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";

export function RecentTransaction() {

    const dispatch = useDispatch<AppDispatch>();
    const onRampTransactionList = useSelector((state: RootState) => state.onRampTransaction);

    useEffect(() => {
        dispatch(fetchOnRampTransactions());
    }, [dispatch]);

    return <Card width="w-full" height="h-80">
        <CardTitle title={"Recent Transaction"} refreshBtn={true} onButtonClick={() => dispatch(fetchOnRampTransactions())} />
        {onRampTransactionList.map((data) => <TransactionCard key={data.id} date={data.startTime} amount={data.amount / 100} status={data.status} />)}
    </Card>
}

type TransactionCardProps = {
    date: Date,
    amount: number,
    status: OnRampStatus
}

function TransactionCard({ date, amount, status }: TransactionCardProps) {

    const sign = (amount < 0) ? "-" : "+";

    return <div className="flex w-full justify-between py-2 items-center" >
        <div className="flex flex-col">
            <div>Received INR</div>
            <div className="text-xs text-gray-600">{getDateString(date)}</div>
        </div>
        <div className="flex flex-col items-end">
            <div>{sign} Rs {amount}</div>
            <StatusBar status={status} />
        </div>
    </div>
}

function StatusBar({ status }: { status: OnRampStatus }) {

    if (status == OnRampStatus.Processing) {
        return <div className={`text-xs text-white px-2 bg-yellow-500 rounded-md text-center`}>Pending</div>
    } else if (status == OnRampStatus.Failure) {
        return <div className={`text-xs text-white px-2 bg-red-500 rounded-md text-center`}>Failed</div>
    } else if (status == OnRampStatus.Success) {
        return <div className={`text-xs text-white px-2 bg-green-500 rounded-md text-center`}>Success</div>
    }
}