const email= document.getElementById('email');
const password= document.getElementById('password');
const login= document.getElementById('log-in');
const form = document.getElementById('form2')

// users=JSON.parse(localStorage.getItem('users')) || [];

// function validate() {
//     // chech if user exists
//     const targetUser = users.find(user => user.email== email.value);



//  if (targetUser && targetUser.password !=password.value){
//     alert('wrong password');
//     { return false}
// }
// else if(email.value.trim()==''){
// alert('Email must be filled');
// // return false ;
//  { return false}
// }

// else if (password.value.trim()==''){
// alert('Password must be filled')
// // return false
// { return false}
// }
// else{
//     if(targetUser && targetUser.password == password.value){
//     if (targetUser.role ==="Admin"){
//         localStorage.setItem('currentUser',JSON.stringify(targetUser))
//         alert('successfully login')
//         return window.location.href="blogs.html";
//         // form.onsubmit= ()=> 
//         // { return true}
//     }

//     if(targetUser.role !=="Admin") {

//     localStorage.setItem('currentUser',JSON.stringify(targetUser))
//     alert('successfully login')
//     return window.location.href="comment.html";
//     // form.onsubmit= ()=> { return true}
//     }
// }
//     else{
//         alert("please signup first")
//         return window.location.href="signup.html"
//     }
// } 



// }


// login.onclick = validate;

// add event listen
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //grad values
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const data = {email, password}

  // use fetch method to interact with your login api endpoint
  fetch('http://localhost:3000/api/v1/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then ((response) => response.json())
  .then((data) => {
    console.log(data)
    if (data.ok) {
    // alert(data.message)
//       // set our token in LS
     localStorage.setItem("authToken", data.token)

    //  if ({isAdmin:true}){
        alert("welcome admin")
        return location.href="dashboard.html"
        
    //  }
    //  else if({isAdmin:false})
    // {
    //     alert(data.message)
    //    return location.href="comment.html"
    //  }
    
    } else {
      alert(data.message)
    }
  })
  .catch(err => alert(err))
});