const nameField= document.getElementById('name');
const emailField= document.getElementById('email');
const password= document.getElementById('password');
const role= document.getElementById('role');
const signup= document.getElementById('signup');
const error_message=document.getElementById('error-message')
const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
users = JSON.parse(localStorage.getItem('users')) || []


function saveUsers() {
    let user ={};
    user.firstName= nameField.value.split(' ')[0];
    user.lastName=nameField.value.split (' ')[1];
    user.email=emailField.value
    user.password=password.value
    user.role= role.value
    users.push(user);
    const stringUsers=JSON.stringify(users);
    localStorage.setItem('users',stringUsers);

    let text;
    error_message.style.padding='10px';
    if(nameField.value.length<5) {
        text = 'Please Enter valid Name'
        error_message.innerHTML=text;
        return false
    }else if (email.value==''){
        text ='Please Enter your emall';
        error_message.innerHTML=text;
        return false
    } 
    else if (password.value==''){
        text ='Please Enter the password';
        error_message.innerHTML=text;
        return false
    }
    else if (password.value.length<8) {
        text = 'Please the password must be at least 8 digit';
        error_message.innerHTML=text;
        return false
    }
    else if (role.value==''){
        text ='Please Enter your role';
        error_message.innerHTML=text;
        return false
    }
    else{
        alert('Successfully Signed up')

    }
    
}


// signup.onclick=saveUsers;

// function saveUsers(){
//     alert("hello world")
// }

signup.onclick=saveUsers
