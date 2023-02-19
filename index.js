let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() =>{
    navbar.classList.toggle('active');
}
function validation() {
   const name= document.getElementById('name').value;
   const email= document.getElementById('email').value;
   const message= document.getElementById('message').value;
   const error_message =document.getElementById('error-message');
   const send=document.getElementById('send')

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
send.onclick= validation


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
// var tasks_work=document.getElementsByClassName("tasks-work")
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
