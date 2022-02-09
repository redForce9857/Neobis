var isPalindrome = function(x) {
    let right = x.toString().split('').reverse().join('')
    if (x == right) {
        return true
    }
    return false
};
console.log(isPalindrome(122));