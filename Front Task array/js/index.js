//#region ForEach

// const testArray = [3,4,5,6,8]

// function myFunction(item){
//     return item * 2
// }

// function myForEach(array, callback){
//     for (let index = 0; index < array.length; index++) {
//         array[index] = callback(array[index], index, array)
        
//     }
// }


// myForEach(testArray, myFunction)
// console.log(testArray);

//#endregion




//#region Map

// const testArray = [3,9,5,7,8,6]
// const testArray2 = []
// function myMap(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         array[index] = callback(array[index],index,array)
//         testArray2.push(array[index])
//     }
// }

// function myFunction(item){
//     return item * 10
// }

// myMap(testArray,myFunction)

// console.log(testArray2);


//#endregion




//#region Filter

// const testArray = [3,9,5,7,88,6]

// function myFunction(item){
//     return item > 18
// }

// function myFilter(array, callback) {
//     const testArray2 = [];
//     for (let index = 0; index < array.length; index++) {  
//         if (callback(array[index],index,array)) {
//             testArray2.push(array[index]);
//             testArray2[index]= testArray[index];
//         }
//     }
// return testArray2
// }

//     console.log(myFilter(testArray,myFunction));


//#endregion




//#region every

// const testArray = [122,122,12]

// let test
// function myFunction(item){
//     return item > 120
// }
// function myEvery(array,callback){
//     for (let index = 0; index < array.length; index++) {
//         if( !callback(array[index])){
//             return false    
//         }
        
//     }
//     return true
// }

// test = myEvery(testArray, myFunction)
// console.log(test);

//#endregion




//#region some
// const testArray = [3,9,5,112,8,6]

// let test

// function mySome(array,callback){
//     for (let index = 0; index < array.length; index++) {
//         if(callback(array[index])){
//              return true
//         }
        
//     }
//     return false
// }

// function myFunction(item){
//     return item > 18
// }
// test = mySome(testArray,myFunction)

// console.log(test);

//#endregion




//#region reduce

// const testArray = [3,9,5,112,8,6];
// let sum = 0;
// for (let i = 0; i < testArray.length; i++) {
//     sum += testArray[i]/testArray.length;
// }

// console.log(sum);

//#endregion




//#region find

// const testArray = [7,6,91,79,5]

// let first = myFind(testArray,myFunction)

// function myFind(array,callback){
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             return array[i]
//         }
//     }
// }

// function myFunction(item){
//     return item > 18
// }

// console.log(first);

//#endregion




//#region keys

// const testArray = [7,6,91,79,5]
// let text = ""

// function myFind(array){
   
//     for (let i = 0; i < array.length; i++) {
//            text += i + "," 
//     }
//     return text
// }
// console.log(myFind(testArray));
//#endregion


//#region entries

// const testArray = [7,6,91,79,5]
// let text = ""

// function myEntries(array){
   
//     for (let i = 0; i < array.length; i++) {
//            text += i + "," + array[i] + "\n"
//     }
//     return text
// }
// console.log(myEntries(testArray));



//#endregion



//#region includes
// const testArray = [7,6,92,79,5]
// let text = myIncludes(testArray, myFunction)

// function myIncludes(array, callback){
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             return true
//         }
        
//     }
//     return false
// }

// function myFunction(item){
//     return item === 91
// }
// console.log(text);
//#endregion



//#region Minimum

// const arr = [5, 2, 8, 1, 6];

// function minimum(array){
//     if(array.length === 0 ){
//         return 0 
//     }

//     let min = arr[0]

//     for (let i = 0; i < array.length; i++) {
//         if(min > arr[i]){
//             min = arr[i]
//         }
        
//     }

//     return min
// }

// console.log(minimum(arr));

//#endregion
