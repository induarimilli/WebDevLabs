// Basic JavaScript Statement
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = 'Hello';
var B = ' world!';
var C = A + B;
console.log(C);

// Basic JavaScript Function
function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
 }
 SumNPrint(x,y);
 SumNPrint(A,B);

 // Conditional Statement
 if (C.length > z) {
    console.log(C);
 } else if (z > C.length) {
    console.log(z);
 } else {
    console.log("good job!");
 }

/*

// For Loop
// Define two arrays containing fruit names
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Function to find "Banana" using a for loop
function findTheBanana(array) {
    // Loop through each item in the array
    for (let index = 0; index < array.length; index++) {
        // Check if the current element is "Banana"
        if (array[index] === "Banana") {
            // Show an alert with the index where "Banana" was found
            alert("found the Banana in index " + index);
        }
    }
}

// Call the function for both arrays
findTheBanana(L1);
findTheBanana(L2);

// Using a forEach loop to check for "Banana" in L1 and L2
L1.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the first array at index " + index);
    }
});

L2.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the second array at index " + index);
    }
});
*/

/*
// Conditional Date Greeting for Console
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)

    if (h>=5 && h<12) {
        console.log("Good morning!"); // Morning greeting (5 AM - 11:59 AM)
    } else if (h>=12 && h<18) {
        console.log("Good afternoon!"); // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h>=18 && h<20) {
        console.log("Good evening!"); // Evening greeting (6 PM - 7:59 PM)
    } else if (h>=20 && h<24 ||  h<5) {
        console.log("Good night!"); // Night greeting (8 PM - 4:59 AM)
    }
 }
greetingFunc();
*/

 /*
// Conditional Date Greeting for Broswer
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)
    var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

 // Check the time and update the greeting accordingly
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is your name.";  // Morning greeting (5 AM - 11:59 AM)
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is your name.";  // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is your name.";  // Evening greeting (6 PM - 7:59 PM)
    } else {  
        E.innerHTML = "Good night, my name is your name.";  // Night greeting (8 PM - 4:59 AM)
    } 
}
greetingFunc();
*/

// Conditional Date Greeting for index.html ONLY

// Function to display a time-based greeting
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)
    var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

    // Check the time and update the greeting accordingly
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is your name.";  // Morning greeting (5 AM - 11:59 AM)
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is your name.";  // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is your name.";  // Evening greeting (6 PM - 7:59 PM)
    } else {  
        E.innerHTML = "Good night, my name is your name.";  // Night greeting (8 PM - 4:59 AM)
    } 
}

// Get the current page URL
var L = window.location.href;
console.log(L);  // Log the full URL to the console for debugging

// Check if the current page is "index.html" before running the greeting function
if (L.includes("index.html")) {  
   greetingFunc();  // Call the function to update the greeting
}

// Show the hidden list and hide the button when clicked
function showList() {
    const list = document.getElementById('funList');
    const button = document.getElementById('showListBtn');

    if (list && button) {
        list.style.display = 'block';  // Reveal list
        button.style.display = 'none'; // Hide button
    } else {
        console.error("Button or List element not found.");
    }
}


// Show full bio on "Read More" click
$("#readMoreBtn").click(function() {
    $("#moreBio").slideDown();
    $("#readMoreBtn").hide(); // Hide "Read More" button
    $("#moreBio").after('<button id="readLessBtn">Read Less</button>'); // Add "Read Less"
});

// Handle "Read Less" click with event delegation
$(document).on("click", "#readLessBtn", function() {
    $("#moreBio").slideUp();
    $("#readMoreBtn").show(); // Show "Read More" again
    $("#readLessBtn").remove(); // Remove "Read Less" button
});



function addYear() {
    document.getElementById("copyYear").textContent = `© ${new Date().getFullYear()} Indu Arimilli`;
}


// Validate Contact Form using Validation API
function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("UserText");
    var validateMsg = document.getElementById("ValidateMsg");

    // Reset validation message
    validateMsg.style.display = "none";
    validateMsg.innerText = "";

    // Check if the name field is valid
    if (!userName.checkValidity()) {
        validateMsg.innerText = "Please enter your name.";
        validateMsg.style.display = "block";
        return false;
    }

    // Check if the email field is valid
    if (!userEmail.checkValidity()) {
        validateMsg.innerText = "Please enter a valid email address.";
        validateMsg.style.display = "block";
        return false;
    }

    // Check if the message field is valid
    if (!userText.checkValidity()) {
        validateMsg.innerText = "Please enter your message.";
        validateMsg.style.display = "block";
        return false;
    }

    // All validations passed
    alert("Message sent successfully!");
    return true;
}


