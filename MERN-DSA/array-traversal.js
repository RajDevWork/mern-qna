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
const arr = [12, 45, 7, 89, 23];
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}