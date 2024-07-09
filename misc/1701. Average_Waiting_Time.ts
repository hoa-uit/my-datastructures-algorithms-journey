function averageWaitingTime(customers: number[][]): number {
    let totalPreparationTime = customers[0][0];
    const waitingTimeList: number[] = [];
    let totalWaitingTime = 0;
    for (let i = 0; i < customers.length; i++) {
        if (totalPreparationTime < customers[i][0]) {
            totalPreparationTime = customers[i][0];
        }

        totalPreparationTime = totalPreparationTime + customers[i][1];

        let waitingTime = 0;
        waitingTime = totalPreparationTime - customers[i][0];
        totalWaitingTime = totalWaitingTime + waitingTime;
        waitingTimeList.push(waitingTime);
    }


    return totalWaitingTime / customers.length;
};
