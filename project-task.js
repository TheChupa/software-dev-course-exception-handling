

/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running


// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================

const prompt = require('prompt-sync')();

let animals = [];
let fees = [];

function addAnimal(name, fee) {
        if (!name || typeof name !== "string" || name.trim() === ''){
        throw new Error("Animal name must contain only letters")
    }
    if (isNaN(fee) || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push(name.trim());
    fees.push(fee);
}




function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName.trim());
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = prompt("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            let animal = prompt("Enter the animal's name: ");
            let fee = Number(prompt("Enter the adoption fee: "));

            try {
                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            let animal = prompt("Enter the animal's name to find its adoption fee: ");

            try {
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}

// ============================================
// 🧩 Problems to Solve
// ============================================

/*
🔹 Invalid Input Errors:
- What if the user enters a negative fee?
A: The program originally would throw an error. I added a check to give prompts to have user input number within bounds

- What if the animal name is blank?

A: The program returns an error. 

- What if an animal isn't found?
A: It states that the animal is not found in records
🔹 Code Flow Problems:
- What happens when an exception is thrown?
There is an error at a certain place in the program.

- Does the rest of the program continue?
Yes, but it returns a specific customer error isntead of a generic error.
I created input validators to fix program running

🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/
