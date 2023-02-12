// function validate()
// {
//     const form = document.getElementById("form2")
//     const username = document.getElementById("email");
//     const password = document.getElementById("password");
//     const errorElement =document.getElementById("error")
//     if (username.value.trim() ==""|| password.value.trim() ==""){
//         alert("no blank values allowed");
//         return false
//     }
//     else if (password.value.trim().length<8){
//         alert("password must be greater than 8");
//         return false
//     }
//     else
//     {
//       return true  
//     }
// }
// onclick="validate()"


// const form = document.getElementById("form2");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const errorElement =document.getElementById("error");
    
//     form.addEventListener("submit",e =>{
//         e.preventDefault
//         validateInputs()

//     })
//     const setError =(element, message)=>{
//         const inputControl = element.parentElement
//         const errorDisplay = inputControl.querySelector('#error');

//         errorDisplay.innertext = message;
//         inputControl.classList.add('error');
//         inputControl.classList.remove('success')
//     }
//     const setSuccess =element =>{
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('#error');

//         errorDisplay.innertext= '';
//         inputControl.classList.add('success')
//         inputControl.classList.remove('error')
//     }
//     const isValidEmail = email => {
//         const re = /^(([^<>()[\]\\.;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-aZ-Z]{2,}))$/;
//         return re.test(string(email).toLowerCase())
//     }

//         const validateInputs= ()=>{
//         const emailValue =email.value.trim();
//         const passwordValue =password.value.trim();

//         if(emailValue == ''){
//             setError(email,'email is required');
//         } else if (!isValidEmail(emailValue)){
//             setError (email, 'Provide a valid email address');
//         }
//         else {
//             setSuccess(email);
//         }
//         if(passwordValue==''){
//             setError(password, 'Password is required')
//         }else if (passwordValue.length <8){
//             setError(password, 'Password must be at least 8 character.')
//         }else {
//             setSuccess(password);
//         }

//     }
// const form = document.getElementById("form2")
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const errorElement =document.getElementById("error")

// form.addEventListener('submit', (e) =>{
//     validate(messagges=[]) 
//     if (email.value == ''|| email.value ==null){
//         messagges.push('Name is required')
//     }
// }

// )
function validate(){
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const re = /^(([^<>()[\]\\.;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-aZ-Z]{2,}))$/;
if(email.trim()==''){
    alert('Email must be filled');
    return false ;
}
//  else if  (!email.match(re)) {
//     alert("Please enter a valid email")
//     return false
// }
 else if (password.trim()==''){
    alert('Password must be filled')
    return false
}
else if (password<8){
    alert('Password must be at least 8 characters')
    return false
}
else{
    return true

}


}

    // if (email.trim() ==""|| password.trim() ==""){
    //     alert("no blank values allowed");
    //     return false
    // }

