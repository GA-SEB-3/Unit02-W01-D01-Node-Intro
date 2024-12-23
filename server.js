/*

1. npm init -y: initilizes my node application


to download package:

npm install 

*/


const colors = require("colors")

const validator = require("validator")


console.log(colors.green(validator.isEmail("omar.com")))

let email = "OMAR.COM"
if(validator.isUppercase(email)){
    console.log(colors.green(email))
}
else{
    console.log(colors.red(email))
}

// console.log(colors.rainbow("I love Javascript"))



let students = []