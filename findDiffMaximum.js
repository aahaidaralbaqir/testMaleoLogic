/**
 * 
 * @param arr
 * @return number
 * 
 * @description
 * You can run this code on repl.it or es6console  
 */

// make a function
function findDiffMaximum(arr){
    // check if array containt zero value
    if(arr.includes(0)){
        return "error"
    }else{
         // find max value
        let max = Math.max(...arr)
        // find min value
        let min = Math.min(...arr)
        // maxDiff =  max value - min value
        let maxDiff = max - min

        return maxDiff
    }
}

console.log(findDiffMaximum([4,3,1,10]))