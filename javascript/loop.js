let arr = [1,2,3,4,5,6,7]

function sumfac(num){
    let sum = 0;
    for(let i =0;i<num.length;i++){
        sum = sum + num[i];
    }
    return  sum;
}

console.log(sumfac(arr))