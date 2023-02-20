let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() =>{
    navbar.classList.toggle('active');
}
   const nameEl= document.getElementById('name');
   const emailEl= document.getElementById('email');
   const messageEl= document.getElementById('message');
   const error_message =document.getElementById('error-message');
   const send=document.getElementById('send')
   const form=document.getElementById('myform');

let messages=[];
function acceptMessage() {
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
