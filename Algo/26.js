
// const removeDuplicates = function(nums) {
//     let uniq = nums.filter((item, poss) =>{
//         return nums.indexOf(item) == poss
//     })
//     return uniq
// };


const removeDuplicates = (num) => {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] != num[i-1]) {
            num[count] = num[i]
            count++
        }
    }
    return count
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));