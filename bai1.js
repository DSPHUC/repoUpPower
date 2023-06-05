let arrays = [2, 5, 9, 4, 7, 8, 6, 3, 1, 5, 4, 8, 6, 0, 1, 3, 4, 5];
let newArray = [];
let newArray1 = [];
let newArray2 = [];
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] % 2 == 0) {
        newArray1.push(arrays[i])
    } else { newArray2.push(arrays[i]) }
}
console.log(newArray1);
console.log(newArray2);
newArray = (newArray1.concat(newArray2));
newArray.splice(newArray.length / 2, 0, 0);
document.write(newArray);


