// recentMessage=document.getElementById('recentMessage')
// let createMessages = () => {
//     recentMessage.innerHTML = "";
//     messages.map((x, y) => {
//       return (recentMessage.innerHTML += `
      
//       <div id=${y}>
//             <span class="fw-name">${x.newName}</span><br><br>
//             <span class="set-email">${x.newEmail}</span><br><br>
//             <span class="set-message">${x.newMessage}</span><br><br>
//             <span class="options">
//               <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-reply" id ="reply"></i>
//               <i onClick ="deleteTask(this);createWorks()" class="fas fa-trash-alt" id="delete"></i>
//               <i ></i>
//             </span>
//       </div>
//       `);
//     });
  
//     resetForm();
//   };
//   let resetForm = () => {
//     uploaded_image ="";
//     textInput.value = "";
//     dateInput.value = "";
//     textarea.value = "";
//   };
//   (() => {
//     messages = JSON.parse(localStorage.getItem("messages")) || [];
//     console.log(messages);
//     createMessages();
//   })();





//   // the comments section
//   let createcomments = () => {
//     recentMessage.innerHTML = "";
//     comments.map((x, y) => {
//       return (recentComment.innerHTML += `
      
//       <div id=${y}>
//             <span class="fw-name">${x.newEmail}</span><br><br>
//             <span class="set-message">${x.newComment}</span><br><br>
//             <span class="options">
//               <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-reply" id ="reply"></i>
//               <i onClick ="deleteTask(this);createWorks()" class="fas fa-trash-alt" id="delete"></i>
//               <i ></i>
//             </span>
//       </div>
//       `);
//     });
  
//     resetForm();
//   };
//   // let resetForm = () => {
//   //   uploaded_image ="";
//   //   textInput.value = "";
//   //   dateInput.value = "";
//   //   textarea.value = "";
//   // };
//   (() => {
//     comment = JSON.parse(localStorage.getItem("messages")) || [];
//     console.log(comment);
//     createComments();
//   })();
const tasks = document.getElementById("tasks");
fetch('http://localhost:3000/api/v1/comments')
.then((response) => response.json())
.then((comments) => {
  console.log(comments)

  comments.data.forEach(comment => {
  const row = document.createElement("tr")
  const emailCell = document.createElement("td");
  const emailonCell = document.createElement("td");
  const contentCell = document.createElement("td")
  const actionsCell = document.createElement("td")

  const replyButton = document.createElement("button")

  // assign values to the cells
  emailCell.textContent = comment.createdAt;
  emailonCell.textContent = comment.email;
  contentCell.textContent = comment.content;
  replyButton.textContent = "reply"

  actionsCell.appendChild(replyButton)
  console.log(row)

  // append rows
  row.appendChild(emailCell)
  row.appendChild(emailonCell)
  row.appendChild(contentCell)
  row.appendChild(actionsCell)

  // append table body
  tasks.querySelector("tbody").appendChild(row)

  replyButton.addEventListener("click", () => {
    deleteBook(book._id)
  })
})
})

const tasks_message = document.getElementById("tasks-message");
fetch('http://localhost:3000/api/v1/messages')
.then((response) => response.json())
.then((messages) => {
  console.log(messages)

  messages.data.forEach(message => {
  const row = document.createElement("tr")
  const nameCell = document.createElement("td");
  const emailCell = document.createElement("td");
  const contentCell = document.createElement("td")
  const actionsCell = document.createElement("td")

  const replyButton = document.createElement("button")

  // assign values to the cells
  nameCell.textContent = message.name;
  emailCell.textContent = message.email;
  contentCell.textContent = message.content;
  replyButton.textContent = "reply"

  actionsCell.appendChild(replyButton)
  console.log(row)

  // append rows
  row.appendChild(nameCell)
  row.appendChild(emailCell)
  row.appendChild(contentCell)
  row.appendChild(actionsCell)

  // append table body
  tasks_message.querySelector("tbody").appendChild(row)

  replyButton.addEventListener("click", () => {
    deleteBook(book._id)
  })
})
})