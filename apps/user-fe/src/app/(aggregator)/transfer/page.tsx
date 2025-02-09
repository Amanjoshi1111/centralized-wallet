import { AppMoney } from "@/components/AddMoney";
import { Button } from "@/components/Button"
import { Card, CardTitle } from "@/components/Card"
import { Balance } from "@/components/Balance";
import { RecentTransaction } from "@/components/RecentTransaction";

export default function TransferPage() {
    return <div>
        <div className="text-5xl font-semibold text-violet-500 pb-10">Transfer</div>
        <div className="flex space-x-5 items-start">
            <AppMoney />
            <div className="flex flex-col w-1/2 space-y-4">
                <Balance />
                <RecentTransaction />
            </div>
        </div>
    </div>
}

