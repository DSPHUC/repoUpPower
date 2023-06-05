let array = [[2, 4, 6, 8,], 
[1, 5, 7, 9],
[1, 7, 9, 3]];
for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array[i].length; j++) {
        sum += array[i][j];
        

    }
    console.log(sum);
}

