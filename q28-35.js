//QUESTION # 28
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//QUESTION # 29
var fav_fruits = ['pineapple', 'peach', 'strawberry'];
if (fav_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (fav_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
}
if (fav_fruits.includes('peach')) {
    console.log("You really like peaches!");
}
if (fav_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (fav_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
//QUESTION # 30
var users = ['Areeba', 'Maryum', 'Admin', 'Esha', 'Hania'];
for (var i = 0; i < users.length; i++) {
    var username = users[i];
    if (username === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log('Hello', username, 'thank you for logging in again.');
    }
}
//QUESTION # 31
if (users.length > 0) {
    console.log("The list is not empty.");
}
while (users.length > 0) {
    users.pop();
}
if (users.length === 0) {
    console.log("We need to find some users!");
}
//QUESTION # 32
var current_users = ['Iqra', 'Areeba', 'Maryum', 'Admin', 'Esha', 'Hania'];
var new_users = ['Areeba', 'Ifrah', 'Sadia', 'Maham', 'HANIA'];
function isUsernameTaken(username) {
    return current_users.some(function (existing_username) { return existing_username.toLowerCase() === username.toLowerCase(); });
}
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i];
    if (isUsernameTaken(new_username)) {
        console.log("Username", new_username, "is already taken.");
    }
    else {
        console.log("username", new_username, "is available.");
    }
}
//QUESTION # 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number === 1) {
        console.log(number + "st");
    }
    else if (number === 2) {
        console.log(number + "nd");
    }
    else if (number === 3) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
}
//QUESTION # 34
var pizzas = ["Chicken Tikka", "Fajita", "Tandoori Chicken"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like", pizzas[i], "pizza.");
}
//QUESTION # 35
var animals = ['Dog', 'Cat', 'Rabbit'];
console.log("Animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\nStatements about animals:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
