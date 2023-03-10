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
// let createTasks = () => {
  fetch('http://localhost:3000/api/v1/blogs')
  .then((response) => response.json())
  .then((blogs) => {
    console.log(blogs) 
    tasks_blog.innerHTML = "";
    blogs.data.forEach(blog=>{
      // uploaded_image.textContent= blog.image;
      // title.textContent = blog.title;
      // content.textContent = blog.content;
      // console.log(blog.title)
    console.log(tasks_blog)

    // })
    // tasks.data.map((x, y) => {
    //   return (tasks.innerHTML += `
      
    //   <div id=${y}>
    //        <img src="${x.uploaded_image}" class="img-blog"> <br><br>
    //         <span class="fw-bold">${x.title}</span><br><br>
    //         <p>${x.content}</p> <br><br>
    //         <span class="options">
    //         <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
           
    //         <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
    //       </span> 

    //   </div>
    //   `);})

      return (tasks_blog.innerHTML += `
      
      <div id=${tasks_blog}>
           <img src="${blog.image}" class="img-blog"> <br><br>
            <span class="fw-bold">${blog.title}</span><br><br>
            <p>${blog.content}</p> <br><br>
            <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
           
            <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
          </span> 

      </div>
      `);
    });})

    fetch('http://localhost:3000/api/v1/works')
    .then((response) => response.json())
    .then((works) => {
      console.log(works) 
      tasks_work.innerHTML = "";
      works.data.forEach(work=>{
      console.log(tasks_work)  
        return (tasks_work.innerHTML += `
        
        <div id=${tasks_work}>
             <img src="${work.image}" class="img-blog"> <br><br>
              <span class="fw-bold">${work.title}</span><br><br>
              <p>${work.content}</p> <br><br>
              <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
             
              <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
            </span> 
  
        </div>
        `);
      });})
  






    // resetForm();
  // };
  // (() => {
  //   data = JSON.parse(localStorage.getItem("data")) || [];
  //   console.log(data);
  //   createTasks();
  // })();


//   ---the work 
// let createWork = () => {
//     tasks_work.innerHTML = "";
//     data_work.map((x, y) => {
//       return (tasks_work.innerHTML += `
      
//       <div id=${y}>
//            <img src="${x.uploaded_image}" class="img-blog"><br><br> 
//             <span class="fw-bold">${x.text}</span><br><br>
//             <span class="set-date">${x.date}</span><br><br>
//             <p>${x.description}</p> <br>
//             <span class="options">
//             <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
          
//             <i onClick ="deleteTask(this);createTasks()" class="fa-solid fa-comment" id="comment"></i>
//           </span> 

//       </div>
//       `);
//     });
  
//     // resetForm();
//   };
//   (() => {
//     data_work = JSON.parse(localStorage.getItem("data_work")) || [];
//     console.log(data_work);
//     createWork();
//   })();
// -----the message form---
