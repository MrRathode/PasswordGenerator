const password_element = document.getElementById("password_text");
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
const special_chars = "!(){}[]@#$%^&*";
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
var pwd_length = document.getElementById("slider");


generate.addEventListener('click', () => {
    let password = "";
    var checked = document.getElementById("checkbox").checked;
    var final_string = string;
    console.log(checked);
    if (checked) {
        final_string +="!(){}[]@#$%^&*";
    }
    for (var i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    password_element.innerText = password;
    final_string = string;
});


clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_element.innerText);
    alert("Copied to your clipboard");
});