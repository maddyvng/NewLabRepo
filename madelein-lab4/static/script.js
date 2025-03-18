var x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);
var  A, B, C;
A = "Hello ";
B = "world!";
C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
    }
    SumNPrint(x,y);
    SumNPrint(A,B);
    
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange']

/*function findTheBanana(array, arrayName) {
    array.forEach(function(item) {
        if (item == 'Banana') {
          alert('We found a banana in the ' + arrayName + ' array');
        }
    })
}

findTheBanana(L1, 'first');
findTheBanana(L2, 'second');
*/

function greetingFunc() {
    const d = new Date();
    let h = d.getHours();
    if (h >= 20) {
        document.getElementById("greeting").innerHTML = "Good night, my name is Maddy Ng";
    } else if (h < 5) {
        document.getElementById("greeting").innerHTML = "Good night, my name is Maddy Ng";
    } else if (h < 12) {
        document.getElementById("greeting").innerHTML = "Good morning, my name is Maddy Ng";
    } else if (h < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon, my name is Maddy Ng";
    } else if (h < 20) {
        document.getElementById("greeting").innerHTML = "Good evening, my name is Maddy Ng";
    }
}

if (window.location.href.includes('index.html')) {
    greetingFunc();
}

function addYear() {
    var date = new Date();
    var year = date.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=year;
}

function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreButton").style.display = "none";
}

$(document).ready(function() {
$("#readLess").click(function(){
    $("#fullBio").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#fullBio").show();
    $("#readLess").show();
    $("#readMore").hide();
});
});

function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg");

    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()){
        msg.innerHTML = "Please fill out all required fields correctly."
    }
}