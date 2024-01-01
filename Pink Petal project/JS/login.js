var pass = document.querySelector("#password")
var icon = document.querySelector("#eyeicon");

icon.addEventListener('click', function(){

    if(pass.type == "password"){
        pass.type = "text";
        icon.src = "Photos/eye-open.png";
    }

    else{
        pass.type = "password";
        icon.src = "Photos/eye-close.png";
    }
})

