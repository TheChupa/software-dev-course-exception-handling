// Try to use a try catch block inside these functions or throw an error and call the function in a try catch block

//example 1
function printArray(array) {
    console.log("Names in the list:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
if (typeof array !== array.isArray()) {
    throw new Error("Input must be array");
}
}


try {
console.log(["lisa" ,"michael,", "bob"])
console.log(1);
}catch(error){
    console.error(error.message);
}



//example 2
function calculateProduct(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("inputs must be numbers");
    }
    return a * b;
}

try{
console.log(calculateProduct(-1 , 1)); // Outputs -1
console.log(calculateProduct("1", 2)); // Outputs inputs myst be numbers
}catch (error){
    console.error(error.message);
}


//example 3
function calculateDive(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers")
    }
    if (b === 0) {
        throw new Error("Cannot divide by 0, please put a new number in divisor position");
    }
    return a / b;
}

try {
    console.log(calculateDive(10, 2)); // outputs 5
    console.log(calculateDive(10,0)); //outputs Cannot dive by 0, please....
}catch(error) {
    console.error(error.message);
}




//example 4
const incompleteTasks = todos.filter((todo) => !todo.completed);

try{
    console.log(incompleteTasks);
}catch(error) {
    console.error(error.message);
}

//example 5
const sortedByPriority = todos.sort((a, b) => a.priority -
b.priority);
