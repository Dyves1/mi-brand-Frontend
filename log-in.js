function validate(){
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById('form2')

if(email.value.trim()==''){
    alert('Email must be filled');
    // return false ;
    form.onsubmit= ()=> { return false}
}

 else if (password.value.trim()==''){
    alert('Password must be filled')
    // return false
    form.onsubmit= ()=> { return false}
}
else if (password.value<8){
    alert('Password must be at least 8 characters')
    // return false
    form.onsubmit= ()=> { return false}
}
else{
    
    alert('login success')
    form.onsubmit= ()=> { return true}

}

}





