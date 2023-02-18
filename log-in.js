const email= document.getElementById('email');
const password= document.getElementById('password');
const login= document.getElementById('log-in');
const form = document.getElementById('form2')

users=JSON.parse(localStorage.getItem('users')) || [];

function validate() {
    // chech if user exists
    const targetUser = users.find(user => user.email== email.value);
    if(targetUser && targetUser.password == password.value){
        localStorage.setItem('currentUser',JSON.stringify(targetUser))
        alert('successfully login')
        window.location.href="dashboard.html";
        form.onsubmit= ()=> { return true}

    } else if (targetUser && targetUser.password !=password.value){
        alert('wrong password');
        form.onsubmit= ()=> { return false}
    }
   else if(email.value.trim()==''){
    alert('Email must be filled');
    // return false ;
    form.onsubmit= ()=> { return false}
}

 else if (password.value.trim()==''){
    alert('Password must be filled')
    // return false
    form.onsubmit= ()=> { return false}
}
    // else {
    //     alert('This account is not valid')
    //     form.onsubmit= ()=> { return false}
       
    // }
}
// login.onclick=vallidate

// login.onclick =signIn
// function validate(){
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    // const form = document.getElementById('form2')

    // const email1= localStorage.setItem('email1');
    // const password1= localStorage.setItem('pass1');

    // if (email==email1 && password==pass1) {
    //     window.location.href='dashboard.hml';
    // }
    // else {
    //     alert('incorrect password')
    // }

// }




// function validate(){
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const form = document.getElementById('form2')

// if(email.value.trim()==''){
//     alert('Email must be filled');
//     // return false ;
//     form.onsubmit= ()=> { return false}
// }

//  else if (password.value.trim()==''){
//     alert('Password must be filled')
//     // return false
//     form.onsubmit= ()=> { return false}
// }
// else if (password.value<8){
//     alert('Password must be at least 8 characters')
//     // return false
//     form.onsubmit= ()=> { return false}
// }
// else{
    
//     alert('login success')
//     form.onsubmit= ()=> { return true}

// }

// }
