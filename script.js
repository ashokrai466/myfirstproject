 const generatePassword=()=>{

    let chars = "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()()_-+{}<>/[]"
    let lengthOfPassword= 14;
    let password ="";

    for (let i= 0; i<lengthOfPassword;i++){
    let randomPassword= Math.floor(Math.random()*chars.length);
    password+=chars.substring(randomPassword,randomPassword+1);

    }
    document.querySelector("#password").value=password;
    }
    let randomPasswordGenerator= document.querySelector("#generateBtn");
    randomPasswordGenerator. addEventListener("click",generatePassword);






 








