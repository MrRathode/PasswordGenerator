const passwordElement = document.getElementById("password_text");
const generateButton = document.getElementById("generate");
const clipboardButton = document.getElementById("clipboard");
const passwordLengthInput = document.getElementById("slider");

generateButton.addEventListener('click', generatePassword);
clipboardButton.addEventListener('click', copyToClipboard);

function generatePassword() {
    let password = "";
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
    const specialChars = "!(){}[]@#$%^&*";
    let finalString = string;

    if (document.getElementById("checkbox").checked) {
        finalString += specialChars;
    }

    for (let i = 0; i < passwordLengthInput.value; i++) {
        let pwd = finalString[Math.floor(Math.random() * finalString.length)];
        password += pwd;
    }

    passwordElement.innerText = password;
}

function copyToClipboard() {
    navigator.clipboard.writeText(passwordElement.innerText);
    alert("Copied to your clipboard");
}
