const weeks: Record<number, String[]> = {
    0: ["Sun"],
    1: ["Mon"],
    2: ["Tue"],
    3: ["Wed"],
    4: ["Thur"],
    5: ["Fri"],
    6: ["Sat"]
}

const months: Record<number, String[]> = {
    0: ["Jan", "January"],
    1: ["Feb", "February"],
    2: ["Mar", "March"],
    3: ["Apr", "April"],
    4: ["May", "May"],
    5: ["Jun", "June"],
    6: ["Jul", "July"],
    7: ["Aug", "August"],
    8: ["Sep", "September"],
    9: ["Oct", "October"],
    10: ["Nov", "November"],
    11: ["Dec", "December"]
}

export function getDateString(dateObj: Date) {
    let date: string | number = dateObj.getUTCDate();
    if (date < 10) {
        date = '0' + date.toString();
    } else {
        date = date.toString();
    }
    const week = weeks[dateObj.getUTCDay()];
    const month = months[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear().toString();

    return `${week} ${month[0]} ${date} ${year}`;
}