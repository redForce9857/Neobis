var climbStairs = function(num) {
    let n = num.toString()
    let temp = 0
    let step = 0
    for (let i = 0; i < n.length; i++) {
        temp += +n[i]
        if (temp == num) {
            step++
        }
    }
    return step
};

console.log(climbStairs(2));