var passbutton = document.querySelector("#passbutton")
var clipbutton = document.querySelector("#clipbutton")
var text = document.querySelector(".textbox")

passbutton.addEventListener("click", function() {
    length = prompt("Pick number of characters. (8-128")
    uppercase = confirm("Would you like upper case letters?")
    lowercase = confirm("Would you like lower case letters?")
    num = confirm("Would you like numbers?")
    special = confirm("Would you like special characters?")
    charset = ""
    password = ""

    while (length < 8 || length > 128 || /[0-9]+$/.test(length) != true) {
        alert("Must be between 8-128 characters!")
        length = prompt("Pick number of characters. (8-128")
    }

    
    while (!uppercase && !lowercase && !num && !special){
        alert("Must choose at least one option!")
        uppercase = confirm("Would you like upper case letters?")
        lowercase = confirm("Would you like lower case letters?")
        num = confirm("Would you like numbers?")
        special = confirm("Would you like special characters?")
    }

    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lowercase){
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (num) {
        charset += "0123456789"
    }
    if (special) {
        charset += "!@#$%&*?"
    }
    
    for (i = 0, n = charset.length; i < length; i++){
        password += charset.charAt(Math.random() * n)
            
    }
    

    text.textContent = password
})

clipbutton.addEventListener("click", function(){
    el = document.createElement('textarea');
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied password: " + el.value)


})