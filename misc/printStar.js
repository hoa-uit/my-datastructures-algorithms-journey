let noStar = -1;
const printStar1 = (n) => {
    for (let i = 0; i < n; i++) {
        noStar += 2;
        let star = "";

        for (let k = 0; k < noStar; k++) {
            star = star + "*";
        }

        let space = ''
        for (let j = i + 1; j < n; j++) {
            space = space + ' ';
        }
        star = space + star;
        console.log(star);
    }
    let space1 = '';
    for (let i = 0; i < noStar / 2 - 1; i++) {
        space1 = space1 + ' ';
    }
    console.log(space1 + '|');
}

printStar1(4);


//    * 
//   ***
//  *****
// *******