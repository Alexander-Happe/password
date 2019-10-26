var passbutton = document.querySelector("#passbutton")
var clipbutton = document.querySelector("#clipbutton")

console.log (passbutton)
console.log (clipbutton)

function lengthcheck(a){
    if (a < 8 || a > 128) {
        return true
    }
}
function charctercheck(a, b, c, d) {
    if (a === false && b === false && c === false && d === false) {
        return true
    }
}
passbutton.addEventListener("click", function() {
    length = prompt("Pick number of characters. (8-128")
    uppercase = confirm("Would you like upper case letters?")
    lowercase = confirm("Would you like lower case letters?")
    num = confirm("Would you like numbers?")
    special = confirm("Would you like special characters?")
    

    while (lengthcheck(length) === true) {
        alert("Must be between 8-128 characters!")
        length = prompt("Pick number of characters. (8-128")
    }
    while (charctercheck(uppercase, lowercase, num, special) === true){
        alert("Must choose at least one option!")
        uppercase = confirm("Would you like upper case letters?")
        lowercase = confirm("Would you like lower case letters?")
        num = confirm("Would you like numbers?")
        special = confirm("Would you like special characters?")
    }
})
