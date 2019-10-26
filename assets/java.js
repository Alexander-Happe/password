var passbutton = document.querySelector("#passbutton")
var clipbutton = document.querySelector("#clipbutton")

console.log (passbutton)
console.log (clipbutton)

function lengthcheck(a){
    if (a < 8 || a > 128) {
        alert("Must be between 8-128 characters!")
    }
}
function charctercheck(a, b, c, d) {
    if (a === false && b === false && c === false && d === false) {
        alert("Must choose at least one option.")
    }
}
passbutton.addEventListener("click", function() {
    length = prompt("Pick number of characters. (8-128")
    uppercase = confirm("Would you like upper case letters?")
    lowercase = confirm("Would you like lower case letters?")
    num = confirm("Would you like numbers?")
    special = confirm("Would you like special characters?")
    

    lengthcheck(length)
    charctercheck(uppercase, lowercase, num, special)
})
