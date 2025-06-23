//promise
// const f1 = () => {
//   setTimeout(() => {
//     return 5;
//   }, 1000);
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// const n = f1();
// f2(n);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((value) => {
      console.log(value.name);
    });
  });
