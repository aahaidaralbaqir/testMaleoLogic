
// buat function
function findDiffMaximum(arr){
    // cek jika array mengandung nilai nol
    if(arr.includes(0)){
        return "Tidak boleh ada nol"
    }else{
         // cari nilai maximum
        let max = Math.max(...arr)
        // cari nilai minimum
        let min = Math.min(...arr)
        // beda terbesar =  nilai maximum - minimum
        let maxDiff = max - min

        return maxDiff
    }
}

console.log(findDiffMaximum([4,3,1,10]))