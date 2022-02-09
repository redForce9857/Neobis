const  subtractProductAndSum = function(n) {
    let str = n.toString()
    let mult = 1;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        mult *= +str[i]
        sum += +str[i]
    }
    let result = mult - sum;
    return result
};
console.log(subtractProductAndSum(234));