const accountId = 199906 //Cannot chage the value it is locked.
let accountEmail = "hadi@google.com"
var accountPass = "12345"
accountCity = "Karachi"

// accountId = 3 not allowed

accountEmail = "Hadi@gmail.com"
accountPass = "0928302"
accountCity = "Islamabad"
let accountState;

// console.log(accountId);
/*
Prefer not to use (var) keyword.
Because of issue in Block Scope and Functional Scope
*/
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
