// var name = '"Huy"';

// alert('show');
// console.log(name);

var myObj = [
    {
        id: 1,
        salary: 100,
    },
    {
        id: 2,
        salary: 222,
    },
    {
        id: 3,
        salary: 444,
    },
];

Array.prototype.reduce2 = function (callback) {
    var salary = 0;
    for (var i = 0; i < this.length; i++) {
        salary = callback(salary, this[i]);
    }
    return salary;
}
var salary = myObj.reduce2(function (totalCurrent, accumulator) {
    console.log( accumulator);
    return totalCurrent + accumulator.salary;
}, 0);
console.log(salary);

Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index]);
        }
    }
}
myObj.forEach2(function (e) {
    console.log( `${e.id}  ${e.salary}`);
})