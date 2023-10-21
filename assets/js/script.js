
/* An on-click event */
function printText() {
    document.getElementById("Button1").innerHTML = "You clicked me, I love you!";
}

function clearText() {
    document.getElementById("Button1").innerHTML = "";
}

/* Dark and light mode button */
function changeMode() {
    console.log('Button clicked!');
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log('The script is working');  // Debugging line
    console.log(element.classList);
}

/* Hover effect buttons */
function turnRed(element) {
    console.log("pointer hovered")
    element.style.backgroundColor = 'red';
}

function revertColor(element) {
    element.style.backgroundColor = '';
}

// Function for date and time onclick event
function printDate() {
    console.log('Button Clicked');
    var currentDate = new Date();
    document.getElementById("dateButton").innerHTML = currentDate.toString();
}

function clearDate() {
    document.getElementById("dateButton").innerHTML = "";
}

window.addEventListener('DOMContentLoaded', (event) => {
    
    // Get button and input field
    const button = document.getElementById('submitButton');
    const inputField = document.getElementById('colorInput');

    // Enable the button when text is entered into the input field
    inputField.addEventListener('input', function() {
        console.log("input detected: ", inputField.value)
        if (inputField.value) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });

    // Set up the button click event
    button.addEventListener('click', function() {
        const color = inputField.value;
        if (color) {
            document.getElementById('input').innerHTML = "Your favorite color is " + color;
        } else {
            document.getElementById('input').innerHTML = "Please enter a valid color name";
        }
    });
});
    
 
 
      