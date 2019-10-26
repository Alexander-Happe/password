var passbutton = document.querySelector("#passbutton")
var clipbutton = document.querySelector("#clipbutton")
var text = document.querySelector(".textbox")
console.log (passbutton)
console.log (clipbutton)
console.log (text)
passbutton.addEventListener("click", function() {
    length = prompt("Pick number of characters. (8-128")
    uppercase = confirm("Would you like upper case letters?")
    lowercase = confirm("Would you like lower case letters?")
    num = confirm("Would you like numbers?")
    special = confirm("Would you like special characters?")
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*$@%#"
    password = ""

    while (length < 8 || length > 128 || /[0-9]+$/.test(length) != true) {
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

    if (uppercase === true && lowercase === true && num === true && special === true){
        for (i = 0, n = charset.length; i < length; i++){
            password += charset.charAt(Math.random() * n)
            
        }
    }
    text.textContent = password
    
    
})
