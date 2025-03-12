let x = 5;
let y = 7;
let z = x + y;
console.log(z); 

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C); 

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y); 
SumNPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(item => {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let message;

    if (h < 12) {
        message = "Good morning";
    } else if (h < 18) {
        message = "Good afternoon";
    } else if (h < 20) {
        message = "Good evening";
    } else {
        message = "Good night";
    }

    let element = document.getElementById("greeting");
    if (element) {
        element.innerHTML = message;
    }
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}
