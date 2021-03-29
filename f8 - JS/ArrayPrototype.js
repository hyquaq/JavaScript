// var name = '"Huy"';

// alert('show');
// console.log(name);

var myObj = [
  {
    id: 1,
    salary: 100,
    isMarry: false,
  },
  {
    id: 2,
    salary: 222,
    isMarry: false,
  },
  {
    id: 3,
    salary: 444,
    isMarry: false,
  },
  {
    id: 4,
    salary: 500,
    isMarry: false,
  },
  {
    id: 5,
    salary: 1000,
    isMarry: false,
  },
];

// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index])) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var isMarry = myObj.some2(function (course) {
//   console.log(course);
//   return course.isMarry == true;
// });

// console.log(isMarry);

// var isMarry = myObj.some(function (course) {
//   console.log(course);
//   return course.isMarry == false;
// });

// console.log(isMarry);

// var filter = myObj.filter(function (course) {
//   return course.salary > 200;
// });
// console.log(filter);

// Array.prototype.filter2 = function (callback) {
//   var result = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index])) {
//         result.push(this[index]);
//       }
//     }
//   }
//   return result;
// };
// var filter = myObj.filter2(function (course) {
//   console.log(course.salary, course.salary > 777);
//   return course.salary > 2;
// }, []);
// console.log(filter);

// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index]);
//         }
//     }
// }
// myObj.forEach2(function (e) {
//     console.log( `${e.id}  ${e.salary}`);
// })

// Array.prototype.reduce2 = function (callback) {
//     var salary = 0;
//     for (var i = 0; i < this.length; i++) {
//         salary = callback(salary, this[i]);
//     }
//     return salary;
// }
// var salary = myObj.reduce2(function (totalCurrent, accumulator) {
//     console.log( accumulator);
//     return totalCurrent + accumulator.salary;
// }, 0);
// console.log(salary);
