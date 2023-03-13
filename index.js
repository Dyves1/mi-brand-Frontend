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

// let messages=[];
// function acceptMessage() {
// console.log("my message")
// alert("Message sent successfully")
//    messages.push({
//     newName:nameEl.value,
//     newEmail:emailEl.value,
//     newMessage:messageEl.value,
//   });
//   localStorage.setItem("messages",JSON.stringify(messages));
//   console.log(messages)
// }
// send.onclick = acceptMessage

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  //   const name = document.getElementById("book-name").value;
  //   const author = document.getElementById("book-author").value;
  
  // have our values in one object
  const data = { name:nameEl.value,email:emailEl.value, content:messageEl.value };
  
  // interaction with the API endpoint
  fetch('http://localhost:3000/api/v1/messages', {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify(data)
   
  })
  .then((response) => {
   return response.json()
  
  })
  .then((data) => {
  console.log(data)
   if (data.ok){
     alert(data.message)
   } else {
     alert(data.errors_message)
   }
  })
  .catch(error => alert(error))
  resetForm()
  });

  const resetForm=()=>{
  
    emailEl.value=""
    nameEl.value=""
    messageEl.value=""
    commentEl.value=""
  }


// ---the blog creation
// let createTasks = () => {
  fetch('http://localhost:3000/api/v1/blogs')
  .then((response) => response.json())
  .then((blogs) => {
    console.log(blogs) 
    // tasks_blog.innerHTML = "";

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
    blogs.data.forEach(blog=>{
      return (tasks_blog.innerHTML += `
      
      <div id="${tasks_blog}">
           <img src="${blog.image}" class="img-blog"> <br><br>
            <span class="fw-bold">${blog.title}</span><br><br>
            <p>${blog.content}</p> <br><br>
            <span class="options">
            <i onclick= "likeTasks(${blog.title})"  class="fa-regular fa-heart" id ="like"></i>
            <i onclick ="createComments(${blog.title})" class="fa-solid fa-comment" id="comment"></i>
          </span> 

      </div>
      `);
    });})
     function likeTask(title){
      console.log("kkkkk")
    }

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
              <i onClick= "likeTask(${work.title})" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-heart" id ="like"></i>
             
              <i onClick ="deleteTask(${work.title});createTasks()" class="fa-solid fa-comment" id="comment"></i>
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
// const emailEl= document.getElementById('email');
// const commentEl= document.getElementById('comment');
// const error_message =document.getElementById('error-message');



// let comments=[];
// function acceptComment() {
// console.log("my comment")
// alert("Comment sent successfully")
//    comments.push({
//     newEmail:emailEl.value,
//     newComment:commentEl.value,
//   });
//   localStorage.setItem("comments",JSON.stringify(comments));
//   console.log(comments)
// }
// send.onclick = acceptComment


// add event listener to the form

