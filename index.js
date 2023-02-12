let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() =>{
    navbar.classList.toggle('active');
}
function validation() {
   const name= document.getElementById('name').value;
   const email= document.getElementById('email').value;
   const message= document.getElementById('message').value;
   const error_message =document.getElementById('error-message');

   let  text;
   
   error_message.style.padding='10px'
   if(name.length<5){
    text ='Please Enter valid Name';
    error_message.innerHTML= text;
    return false
   }
   else if(email==''){
    text ='Please Enter your email';
    error_message.innerHTML= text;
    return false
   }
   else if(message.length<3){
    text ='Please Enter the message';
    error_message.innerHTML= text;
    return false
   }
   else{
   alert('Message submitted successfully!')
   return }




}
// console.log('hiiiiii')