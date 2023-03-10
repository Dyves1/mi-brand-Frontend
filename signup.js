const nameField= document.getElementById('name');
const emailField= document.getElementById('email');
const password= document.getElementById('password');
const signup= document.getElementById('signup');
const error_message=document.getElementById('error-message')
const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const form = document.getElementById('signup-form')

// users = JSON.parse(localStorage.getItem('users')) || []


// function saveUsers() {
//     let user ={};
//     // user.firstName= nameField.value.split(' ')[0];
//     // user.lastName=nameField.value.split (' ')[1];
//     user.name=nameField.value
//     user.email=emailField.value
//     user.password=password.value
//     user.role= role.value
//     users.push(user);

//     let text;
//     error_message.style.padding='10px';
//     if(nameField.value.length<5) {
//         text = 'Please Enter valid Name'
//         error_message.innerHTML=text;
//         return false
//     }else if (email.value==''){
//         text ='Please Enter your emall';
//         error_message.innerHTML=text;
//         return false
//     } 
//     else if (password.value==''){
//         text ='Please Enter the password';
//         error_message.innerHTML=text;
//         return false
//     }
//     else if (password.value.length<8) {
//         text = 'Please the password must be at least 8 digit';
//         error_message.innerHTML=text;
//         return false
//     }
//     else if (role.value==''){
//         text ='Please Enter your role';
//         error_message.innerHTML=text;
//         return false
//     }
//     else{
//         alert('Successfully Signed up')

//     }
    
// }
// signup.onclick=saveUsers
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //grad values
newUsers = JSON.parse(localStorage.getItem('newUsers')) || []
    let user ={};
    // user.firstName= nameField.value.split(' ')[0];
    // user.lastName=nameField.value.split (' ')[1];
    user.name=nameField.value
    user.email=emailField.value
    user.password=password.value
    newUsers.push(user);

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
    else if (password.value.length<6) {
        text = 'Please the password must be at least 8 digit';
        error_message.innerHTML=text;
        return false
    }
    else{
        // alert('Successfully Signed up')
    const users = {fullname:nameField.value,email:emailField.value, password:password.value}
    // use fetch method to interact with your login api endpoint
    fetch('http://localhost:3000/api/v1/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(users)
    })
    .then ((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.ok) {
      alert(data.message)
          location.href="login.html"

      } else {
        alert(data.message)
      }
    })
    .catch(err => alert(err))
}
  });
