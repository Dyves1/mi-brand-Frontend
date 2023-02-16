function validate(){
const email = document.getElementById("email");
const password = document.getElementById("password");

if(email.value.trim()==''){
    alert('Email must be filled');
    // return false ;
}

 else if (password.value.trim()==''){
    alert('Password must be filled')
    // return false
}
else if (password.value<8){
    alert('Password must be at least 8 characters')
    // return false
}
else{
    
    alert('login success')
    window.location.href="index.html"
    // return true

}

}

// login.onclick=validate

// const back=document.getElementsByClassName('arrow')
// function beBack() {
//    location.replace('index.html')
// }

// back.onclick = beBack
// const login= document.getElementById('login');
// users=JSON.parse(localStorage.getItem('users')) || [];

// function signIn() {
//     // chech if user exists
//     const targetUser = users.find(user => user.email== email.value);
//     if(targetUser && targetUser.password == password.value){
//         localStorage.setItem('currentUser',JSON.stringify(targetUser))
//         window.location.href="dashboard.html";
//     } else if (targetUser && targetUser.password !=password.value){
//         alert('wrong password');
//     }else {
//         alert('not registered go to signup')
//         window.location.href ="index.html"
//     }
// }
// login.onclick =signIn

