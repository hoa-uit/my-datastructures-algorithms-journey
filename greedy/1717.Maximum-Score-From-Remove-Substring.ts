
const maximumGain = (s: string, x: number, y: number) => {
    let sumPoints = 0;
    let bigPoint;
    let smallPoint;
    let bigPointString;
    let smallPointString;

    if (x > y) {
        bigPoint = x;
        smallPoint = y;
        bigPointString = 'ab';
        smallPointString = 'ba';
    } else {
        bigPoint = y;
        smallPoint = x;
        bigPointString = 'ba';
        smallPointString = 'ab';
    }

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        console.log('stack ', stack);
        console.log('stack[stack.length - 1] ', stack[stack.length - 1]);
        console.log('stack[stack.length - 1] + s[i] ', stack[stack.length - 1] + s[i]);
        console.log('bigPointString ', bigPointString);


        if (stack.length > 0 && stack[stack.length - 1] + s[i] === bigPointString) {
            stack.pop();
            sumPoints = sumPoints + bigPoint;
        }
        else {
            stack.push(s[i]);
        }
    }

    const smallPointStack: string[] = [];
    console.log('stack ne ', stack);

    for (let i = 0; i < stack.length; i++) {
        if (smallPointStack.length > 0 && smallPointStack[smallPointStack.length - 1] + stack[i] === smallPointString) {
            smallPointStack.pop();
            sumPoints = sumPoints + smallPoint;
        } else {
            smallPointStack.push(stack[i]);
        }
    }

    return sumPoints;
}


const string = "aabbaaxybbaabb";
console.log(maximumGain(string, 5, 4))