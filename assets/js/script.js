
/* An on-click event */
function printText() {
    document.getElementById("Button1").innerHTML = "You clicked me, I love you!";
}

function clearText() {
    document.getElementById("Button1").innerHTML = "";
}

function changeMode() {
    console.log('Button clicked!');
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log('The script is working');  // Debugging line
    console.log(element.classList);
}