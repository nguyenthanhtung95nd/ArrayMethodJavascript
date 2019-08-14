const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]
console.log(items);

// "filter" like "Where" in LINQ
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(JSON.stringify(filteredItems));
// result: [{"name":"Bike","price":100},{"name":"Album","price":10},{"name":"Book","price":5},{"name":"Keyboard","price":25}]

// "map" like "Select" in LINQ
const itemNames = items.map((item) => {
    return item.price;
});
console.log(JSON.stringify(itemNames));
// result: [100, 200, 10, 5, 500, 1000, 25]

// "find" like "Find" in LINQ
const foundItem = items.find((item) => {
    return item.name === 'Bike';
});
console.log(JSON.stringify(foundItem));
// result: {"name":"Bike","price":100}

// "forEach" like "ForEach" in LINQ
items.forEach((item) => {
    console.log(item.price);
});
// result:  100
//          200
//          10
//          5
//          500
//          1000
//          2

// "some" like "Any" in LINQ
const hasInExpensiveItems_some = items.some((item) =>{
    return item.price >= 100;
    //Check in Array each item has price larger than 100
});
console.log(hasInExpensiveItems_some);
// return true

// "every" like "All" in LINQ
const hasInExpensiveItems_every = items.every((item) =>{
    return item.price >= 5;
    // Check in Array all item has price larger than 5
});
console.log(hasInExpensiveItems_every);

// "reduce"
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(total);
// Note: 
// They are used to calculate a single value based on the array.
// The syntax is:
// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
//   }, [initial]);

// Arguments:
// previousValue – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

const items2 = [1,2,3,7,9];
console.log(items2);
// "includes" like "Contains" in LINQ
const hasIncludeItems = items2.includes(5);
// Check item contain in array
console.log(hasIncludeItems);