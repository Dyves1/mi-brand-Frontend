let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() =>{
    navbar.classList.toggle('active');
}
// function validation() {
   const nameEl= document.getElementById('name');
   const emailEl= document.getElementById('email');
   const messageEl= document.getElementById('message');
   const error_message =document.getElementById('error-message');
   const send=document.getElementById('send')
   const form=document.getElementById('myform');

//    let  text;
   
//    error_message.style.padding='10px'
//    if(nameEl.length<5){
//     text ='Please Enter valid Name';
//     error_message.innerHTML= text;
//     return false
//    }
//    else if(emailEl==''){
//     text ='Please Enter your email';
//     error_message.innerHTML= text;
//     return false
//    }
//    else if(messageEl.length<3){
//     text ='Please Enter the message';
//     error_message.innerHTML= text;
//     return false
//    }
//    else{
//    alert('Message submitted successfully!')
//     }

//     // acceptMessage();
   
// }
// send.onclick=acceptMessage
//  function acceptMessage()

// let message=[];
// let acceptMessage= ()=> {
//   message.push({
//     newName:nameEl,
//     newEmail:emailEl,
//     newMessage:message
//   })
//   localStorage.setItem("message",JSON.stringify(message));
//   console.log(message)
// }
// send.onclick= validation
// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
// console.log("button clicked");
// formValidation();
// })
// let formValidation=()=>{
//   if (nameEl === "") {
//     error_message.innerHTML = "Post cannot be blank";
//     console.log("failure");
//   } else {
//     console.log("successs");
//     error_message.innerHTML = ""; 
//   }
// }
let messages=[];
function acceptMessage() {
  // send=document.getElementById('send');
console.log("my message")
alert("Message sent successfully")
   messages.push({
    newName:nameEl.value,
    newEmail:emailEl.value,
    newMessage:messageEl.value,
  });
  localStorage.setItem("messages",JSON.stringify(messages));
  console.log(messages)
}
send.onclick = acceptMessage
// (() => {
//   messages = JSON.parse(localStorage.getItem("messages")) || [];
//   console.log(messages);
//   acceptMessage();
// })();



// ---the blog creation
let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
      
      <div id=${y}>
           <img src="${x.uploaded_image}" class="img-blog"> <br><br>
            <span class="fw-bold">${x.text}</span><br><br>
            <span class="set-date">${x.date}</span><br><br>
            <p>${x.description}</p> <br><br>
            <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
           
            <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
          </span> 

      </div>
      `);
    });
  
    // resetForm();
  };
  (() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
  })();


//   ---the work 
let createWork = () => {
    tasks_work.innerHTML = "";
    data_work.map((x, y) => {
      return (tasks_work.innerHTML += `
      
      <div id=${y}>
           <img src="${x.uploaded_image}" class="img-blog"><br><br> 
            <span class="fw-bold">${x.text}</span><br><br>
            <span class="set-date">${x.date}</span><br><br>
            <p>${x.description}</p> <br>
            <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
          
            <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
          </span> 

      </div>
      `);
    });
  
    // resetForm();
  };
  (() => {
    data_work = JSON.parse(localStorage.getItem("data_work")) || [];
    console.log(data_work);
    createWork();
  })();
// -----the message form---
