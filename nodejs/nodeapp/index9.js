import bcrypt from "bcrypt";
// const pwd = "pass1234";
// const hashedpwd = await bcrypt.hash(pwd, 10);
// console.log(hashedpwd)
const check = await bcrypt.compare("pass1234","$2b$10$YrMxO.TvcNTLR1.62wMxMOHgbiyijL8tKjvV98.WGevqkBvzYmrNe")
console.log(check)

