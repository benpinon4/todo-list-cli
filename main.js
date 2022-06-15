const prompt = require("prompt-sync")({ sigint: true });

console.log("\nWelcome to the To-Do-List-Manager-Application");

console.log(
  "\nYour to do list is empty \n\nPlease select a number below \n\n1.Adding Item \n2.Completing Item \n3.Exit the Application"
);

let choice = Number(prompt("> ")); // first prompt of the program and asks the user for 1 or 2

let items = [""]; // empty array with index 0 filled with a default item used to store to do items
let statusArray = [""]; // our list of completion statuses (true/false)

while (choice !== 3) {
  if (choice === 1) {
    let answer = prompt("Please enter your item name: ");
    items.push(answer);
    statusArray.push(false);
    printList();
    selectChoice();
  } else if (choice === 2) {
    if (items.length < 1){
    console.log("Your to-do-list is empty.")  
    }
    if (items.length > 1 ){
    let indexChoice = Number(prompt("Select an item to complete: "));
    for (let i = 1; i < items.length; i++) {
      if (i === indexChoice) {
        // checks to see if prompted indexChoice i within the loop incrementation
        statusArray[i] = true; // when i = indexChoice change statusArray in current loop incrementatin to true value. Thus changing item in current statusArray index to complete.
      }
      // if (i !== indexChoice) {
      //   console.log("\n**You must select a current list item to proceed.**");
      //   indexChoice = Number(prompt("\nPlease enter the number which corresponds to the list item: "));
      //   // for (let i = 1; i < items.length; i++) {
      //   //   if (i === indexChoice) {
      //   //     statusArray[i] = true;
      //   //   }
      //   // }
      // }
    }
    printList();
    selectChoice();
  } 
  
} else {
  console.log("Please select a number between 1 and 3");
  selectChoice();
}
}

// Functions

//This function begins the application and prompts the user for number. After the user is prompted the user input variable is checked by conditions.
function selectChoice() {
  console.log(
    "\nPlease select a number below \n\n1.Adding Item \n2.Completing Item \n3.Exit the Application"
  );

  choice = Number(prompt("> ") + "\n"); // first prompt of the
}

//this function compares boolean array and adds incomplete and complete to the selected item in the current to do list.
function printList() {
  console.log("\nCurrent To-Do-List");
  let status = " "; //this variable is used to add an incomplete complete
  for (let i = 1; i < items.length; i++) {
    if (statusArray[i] === false) {
      status = "[incomplete]";
    } else if (statusArray[i] === true) {
      status = "[complete]";
    }
    console.log(i + ". " + status + " " + items[i]);
  }
}
/*
1. Figure out the User Interface.
-will include a majority of your console.log's
    -different user options
    -welcome message
-prompts
    -check if user input one or two
    -1 for adding an item
    -2 for completing  completing an item

2. Store to-do-list Items(choice === 1)
-prompt user for to-do-list item
-create an array to store prompts as an incomplete item
-use .push() to add items to end of array
-start to-do list at 1 so it doesnt look like index 0
////////////////

-stores those items as incomplete

incomplete = false
complete = true

let = statusArray = []

["wash dog"]


3. completing incomplete items(choice === 2)
-prompt for a number from the todo list that corresponds to the array index of the items
-conditional to check  completion
*/
