// var isValid = function(s) {
//   if(s == ""){
//     return true
//   }
//   if(s.length < 2){
//     return false
//   }
//   const pairBrkts = {
//     "(" : ")",
//     "[" : "]",
//     "{" : "}",
//   }
//   let stk = []
//   let arr = s.toString().split("")
//   for (let i = 0; i < arr.length; i++) {
//     if (pairBrkts[arr[i]]) {
//       stk.push(arr[i])
//     }else{
//       let chek = stk.pop();
//       if(pairBrkts[chek] != arr[i]){
//         return false
//       }
//     }
//   }
//   if (stk.length > 0) {
//     return false
//   }
//   return true
// };
// console.log(isValid("()[]{}"));


let f = (a, b) => {a + b}