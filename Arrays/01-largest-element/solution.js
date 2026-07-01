function largestElement(arr) {
 let larg =arr[0];
 for(let i=1; i<arr.length; i++){
    if(larg<arr[i]){
        larg=arr[i];
    }
 }
return larg;
}
console.log(largestElement([2,10,6,8,9]) )