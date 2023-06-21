const {remove} = require("lodash")

const array = [true, 1, 0, false, "false", ""]

const res = remove([...array], (item) => item)

console.log(array)
console.log(res)