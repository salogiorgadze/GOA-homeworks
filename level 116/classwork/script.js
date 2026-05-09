// util module - ს ვიყენებთ კოდის უკეთეს ორგანიზებისთვის და debug - ისთვის

const util = require("util");

console.log(util.types);

const birthday = new Date();
// isDate() --> ამოწმებს თუ არის ობიექტი
console.log(util.types.isDate(birthday));

// promisify არის ფუნქცია, რომელიც node.jsში გამოიყენება იმისთვის, რომ ძველი სტილის callback-based ფუნქციები გადააქციო Promise-based ფუნქციებად.

function example(arg, callback) {
  if (arg) {
    callback(null, "Success");
  } else {
    callback("Error", null);
  }
}

const promisifyExample = util.promisify(example);

promisifyExample(true)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// const util = require("util");

// function getUser(id, callback) {
//   if (id === 5) {
//     callback(null, { nickname: "Teddy" });
//   } else {
//     callback(new Error("User not found"));
//   }
// }

// const getUserPromise = util.promisify(getUser);

// async function tryToGetUser(id) {
//   try {
//     const user = await getUserPromise(id);

//     console.log(`User found! Their nickname is: ${user.nickname}`);
//   } catch (e) {
//     console.error("User not found");
//   }
// }

// tryToGetUser(1);
// tryToGetUser(5);
