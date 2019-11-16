function mergeAndSort(a){
    
    function sorting(data) {
        let len = data.length
        for(let i = 0; i < len; i++) {
            for(let j = 0; j < len; j++) {
                if(data[j] > data[j + 1] ) {
                    let tmp = data[j]
                    data[j] = data[j + 1]
                    data[j + 1] = tmp 
                }
            }
        } 
        return data
    }

    return function(b) {
        let mergedArray = [...a,...b]
        return sorting(mergedArray)
    }
}

console.log(mergeAndSort([1,7,13,15])([1,4,5,9,20]))