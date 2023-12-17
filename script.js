const passwordBox = document.getElementById("Password")

const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrtstuvwxyz"
const number = "0123456789"
const spcSymbol = "!@#$%^&*(/){\][}"
const allChars = upperCase+lowerCase+number+spcSymbol;

function createPassword(){
    let password = "";
   
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += spcSymbol[Math.floor(Math.random() * spcSymbol.length)];

    while(length>password.length){
     password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password
}

function copyPassword(){
     passwordBox.select()
     navigator.clipboard.writeText(passwordBox.value)
     .then(() => {
         console.log('Password copied to clipboard');
     })
     .catch(err => {
         console.error('Could not copy password: ', err);
     });
}