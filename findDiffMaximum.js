
function findDiffMaximum(arr){
    if(arr.includes(0)){
        return "error"
    }else{
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        let maxDiff = max - min

        return maxDiff
    }
}

console.log(findDiffMaximum([4,3,1,10]))