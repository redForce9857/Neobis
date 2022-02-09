function Duplicate(n){
    const set = new Set(n)
    return set
}
// console.log(Duplicate([1,1,1,2,3,4,5,6,7,7,7,4,4,3,2,2,0]));


function recursion(x, n){
    if (n == 1){
        return x
    }else{
        return x * recursion(x, n-1)
    }
}
console.log(recursion(2, 3) );