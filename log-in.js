const email= document.getElementById('email');
const password= document.getElementById('password');
const login= document.getElementById('log-in');
const form = document.getElementById('form2')

users=JSON.parse(localStorage.getItem('users')) || [];

function validate() {
    // chech if user exists
    const targetUser = users.find(user => user.email== email.value);
//     if(targetUser && targetUser.password == password.value){
//         if (targetUser.role ==="admin"){
//             localStorage.setItem('currentUser',JSON.stringify(targetUser))
//             alert('successfully login')
//             window.location.href="blogs.html";
//             form.onsubmit= ()=> { return true}
//         }
//         else if(targetUser.role!=="admin"){

       
//         localStorage.setItem('currentUser',JSON.stringify(targetUser))
//         alert('successfully login')
//         window.location.href="comment.html";
//         form.onsubmit= ()=> { return true}
//         }
//         // else if (!targetUser) {
//         //     alert('Please signup first')
//         //     window.location.href="signup.html";
//         //     form.onsubmit= ()=> { return true}
//         // }
//     } 
    
//     else if (targetUser && targetUser.password !=password.value){
//         alert('wrong password');
//         form.onsubmit= ()=> { return false}
//     }
//    else if(email.value.trim()==''){
//     alert('Email must be filled');
//     // return false ;
//     form.onsubmit= ()=> { return false}
// }

//  else if (password.value.trim()==''){
//     alert('Password must be filled')
//     // return false
//     form.onsubmit= ()=> { return false}
// }


 if (targetUser && targetUser.password !=password.value){
    alert('wrong password');
    { return false}
}
else if(email.value.trim()==''){
alert('Email must be filled');
// return false ;
 { return false}
}

else if (password.value.trim()==''){
alert('Password must be filled')
// return false
{ return false}
}
else{
    if(targetUser && targetUser.password == password.value){
    if (targetUser.role ==="Admin"){
        localStorage.setItem('currentUser',JSON.stringify(targetUser))
        alert('successfully login')
        return window.location.href="blogs.html";
        // form.onsubmit= ()=> 
        // { return true}
    }

    if(targetUser.role !=="Admin") {

    localStorage.setItem('currentUser',JSON.stringify(targetUser))
    alert('successfully login')
    return window.location.href="comment.html";
    // form.onsubmit= ()=> { return true}
    }
}
    else{
        alert("please signup first")
        return window.location.href="signup.html"
    }
} 



}


login.onclick = validate;