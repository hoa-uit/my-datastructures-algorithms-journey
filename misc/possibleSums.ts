/*
possibleSums
You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. 
You want to know how many distinct sums you can make from non-empty groupings of these coins.
Example

For coins = [10, 50, 100, 120] and quantity = [2, 2, 1, 1],
the output should be solution(coins, quantity) = 9.
 
Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.

*/


/*
- define a Set to store distinct sum of group non-empty coins with first element is 0
- loop through each coin
- with each coin loop through quantity of this coin
- loop through each sum in possible sum, plus sum with coin multiply with quantity
- push sum to possibleSums


*/
const getPossibleSums = (coins: number[], quantity: number[]) => {
    const possibleSums: Set<number> = new Set();

    possibleSums.add(0);

    for (let i = 0; i < coins.length; i++) {
        const arraySums = Array.from(possibleSums);

        for (let j = 1; j <= quantity[i]; j++) {

            for (let k = 0; k < arraySums.length; k++) {
                const sum = coins[i] * j + arraySums[k];

                possibleSums.add(sum);
            }
        }
    }

    console.log(possibleSums);

    possibleSums.delete(0);

    return possibleSums.size;
}

console.log(getPossibleSums([10, 50, 100], [1, 2, 1]))
