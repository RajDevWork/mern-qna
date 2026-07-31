console.log("=====================================");
const arr = [10, 20, 30, 40];
for(let i=0; i<arr.length;i++){
    console.log(`Index: ${i} Value: ${arr[i]}`)
}

console.log("================== Can you traverse the array from last to first? ===================");

for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i])
}


console.log("================== Print only even indexed elements ===================");

for(let i=0; i<arr.length; i++){
    if(i % 2 === 0) console.log(arr[i])
}

console.log("================== Print only odd indexed elements ===================");

for(let i=0; i<arr.length; i++){
    if(i % 2 !==0) console.log(arr[i])
}


console.log("================== Finding max ===================");
const arrr = [12, 45, 7, 89, 23];
let max = arrr[0];
for(let i=1; i<arrr.length; i++){
    if(arrr[i] > max){
        max = arrr[i]
    }
}
// console.log("Max = ",max);

console.log("================== Finding min ===================");

function findMin(arr){

    if(!arr.length){
        return "Empty has no minimun value to check."
    }

    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min) min = arr[i]
    }
    return min;
}
let array = [12, 45, 7, 89, 23];
// console.log(findMin(array))


console.log("================== Second Largest ===================");

function SecondLargest(arr){

    if(!arr.length){
        return null;
    }
    if(arr.length < 2){
        return arr[0];
    }

    let Max = arr[0];
    let sMax;
    let index;

    for(let j=1; j<arr.length; j++){
        if(arr[j] !== Max){
            
            if(arr[j] < Max){
                sMax = arr[j]
            }else{
                sMax = Max
                Max = arr[j]
                
            }
            index = j;

            break;
        }
    }
    if(Max < sMax){
        sMax = Max;
        Max = arr[index]
    }

   
    for(let i = index+1; i<arr.length; i++){
        if(arr[i] > Max){
            sMax = Max;
            Max = arr[i]
        }else if(arr[i]>sMax && arr[i]!==Max){
            sMax = arr[i]
        }
    }

    return sMax;
}
array = [-10, -20, -5];

// console.log(SecondLargest(array));


function secondLargest(arr){

    if(!arr.length){
        return null;
    }
    if(arr.length < 2){
        return null;
    }
    let max = arr[0];
    let sMax = 0;

    for(let i=1; i<arr.length;i++){
        if(arr[i]===max) continue;

        if(arr[i] > max){
            sMax = max;
            max = arr[i]
        }else if(arr[i]> sMax){
            sMax = arr[i]
        }
    }

    return sMax === max ? undefined : sMax

}

// console.log(secondLargest(array));

/**
 * 
Maximum dhoondhna hai?
Start from the smallest possible value.
→ Number.NEGATIVE_INFINITY

Minimum dhoondhna hai?
Start from the largest possible value.
→ Number.POSITIVE_INFINITY
 * 
 * 
 */

function secondLargest(arr) {
    if (arr.length < 2) return null;

    let max = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;

    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num < max) {
            second = num;
        }
    }

    return second === Number.NEGATIVE_INFINITY ? null : second;
}



console.log("=========================Move zeros===========================")

function moveZeroes(arr){

    let index = 0;

    for(let i=0; i<arr.length; i++){

        if(arr[i] !== 0){
            if (index !== i) {
                [arr[index], arr[i]] = [arr[i], arr[index]];
            }
            index++;
        }

    }
return arr;

}
let myArr = [0, 1, 0, 3, 12];
// console.log(moveZeroes(myArr))


console.log("=========================Remove Duplicate===========================")

function removeDuplicates(arr) {
    // your code
    let index =1;

    for(let i=1; i<arr.length; i++){

        if(arr[i]!==arr[i-1]){
            arr[index] = arr[i]
            index++;
        }

    }

    arr.length = index;
    return arr;
}
myArr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(myArr))