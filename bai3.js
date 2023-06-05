let array = [
    [1, 3, 5, 7, 9],
    [2, 4, 6, 3, 9],
    [4, 2, 6, 5, 9]
];
    let count = 0;
    let x = 9;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (x == array[i][j]) {
                count += 1;
            }
        }
    }
console.log(count);