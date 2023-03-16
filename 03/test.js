// const a = "1";
// console.log(a);
// a = "11"; // 재할당 x
// console.log(a);

// // array create
// const todos = ['운동'];
// const todo = '공부';
// todos.push(todo);
// console.log(todos);

// // read
// todos.forEach(function(todo) {
//   console.log(todo);
// });

// // update
// const updateTodo = "공부";
// const updateIndex = todos.findIndex((todo) => {
//   return todo === updateTodo;
// });
// todos[updateIndex] = "공부";
// console.log(todos);

// 공부 -> 게임
// const newTodos = todos.map(function (todo) {
//   if (todo === updateTodo) {
//     return "게임";
//   }
//   return todo;
// });
// console.log(newTodos);

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// function test() {
//   console.log("test()");
// }
// var id = setInterval(test, 1000);

// console.log(id);
// clearInterval(id);

// var nick = "aji";

// function test() {
//   var age = 30;
//   console.log(nick, age);
// }

// test();
// console.log(age);

// var name = "global";
// function test() {
//   console.log(name);
//   var name = "local";
//   console.log(name);
// }
// test();


// test2();
// function test2() {
//   console.log("test");
// }

let value;
let count = 0;
while (value !== null) {
  value = window.prompt('숫자 입력');
  count += value * 1;
}
console.log(count);

// 숫자가 아닌 값이 왔을 때 처리