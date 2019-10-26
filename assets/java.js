var passbutton = document.querySelector("#passbutton")
var clipbutton = document.querySelector("#clipbutton")

console.log (passbutton)
console.log (clipbutton)

passbutton.addEventListener("click", function() {
    length = prompt("Pick number of characters. (8-128")
    uppercase = confirm("Would you like upper case letters?")
    lowercase = confirm("Would you like lower case letters?")
    num = confirm("Would you like numbers?")
    special = confirm("Would you like special characters?")
    
    while (length < 8 || length > 128) {
        alert("Must be between 8-128 characters!")
        length = prompt("Pick number of characters. (8-128")
    }

    
    while (uppercase === false && lowercase === false && num === false && special === false){
        alert("Must choose at least one option!")
        uppercase = confirm("Would you like upper case letters?")
        lowercase = confirm("Would you like lower case letters?")
        num = confirm("Would you like numbers?")
        special = confirm("Would you like special characters?")
    }
    
})
