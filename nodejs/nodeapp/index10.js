import jwt from "jsonwebtoken";
const SECRET = "sometext";
const user = {
  name: "John",
  email: "john@gmail.com",
  role: "admin",
};
const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
console.log(token)

const user1 = jwt.verify(token,SECRET)
console.log(user1)

