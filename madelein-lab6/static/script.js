//General functions

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

//Function for home pg
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

if (window.location.href.includes('index.html') || window.location.href.includes('template.html')) {
    greetingFunc();
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
}

//Function for all pgs
function addYear() {
    var date = new Date();
    var year = date.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=year;
}

/*
function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreButton").style.display = "none";
}
*/

//Function for contact pg
function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg");

    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()){
        msg.innerHTML = "Please fill out all required fields correctly."
    }
}

if (window.location.href.includes('contact.html')) {
    validate();
}


//Function for fun pg
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json()) /* convert api to javascript object */
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
        document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
    });
    }

    if (window.location.href.includes('fun.html')) {
        getAdvice();
    }



//Function for hamburger icon
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    //prevents errors for menuIcon not existing on pgs other than template pg
    //this if statement condition suggested by copilot
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

        //highlight active nav link
        function highlightActiveLink() {
            const currentPath = window.location.pathname;
            console.log('Current Path:', currentPath);
            links.forEach(link => {
                const linkPath = new URL(link.href, window.location.origin).pathname;
                console.log('Link Path:', linkPath)
                if (linkPath === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        //makes sure active link is dynamically highlighted for all pgs
        if (links.length > 0) {
        highlightActiveLink();
        }
});

