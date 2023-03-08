// recentMessage=document.getElementById('recentMessage')
let createMessages = () => {
    recentMessage.innerHTML = "";
    messages.map((x, y) => {
      return (recentMessage.innerHTML += `
      
      <div id=${y}>
            <span class="fw-name">${x.newName}</span><br><br>
            <span class="set-email">${x.newEmail}</span><br><br>
            <span class="set-message">${x.newMessage}</span><br><br>
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-reply" id ="reply"></i>
              <i onClick ="deleteTask(this);createWorks()" class="fas fa-trash-alt" id="delete"></i>
              <i ></i>
            </span>
      </div>
      `);
    });
  
    resetForm();
  };
  let resetForm = () => {
    uploaded_image ="";
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
  };
  (() => {
    messages = JSON.parse(localStorage.getItem("messages")) || [];
    console.log(messages);
    createMessages();
  })();





  // the comments section
  let createcomments = () => {
    recentMessage.innerHTML = "";
    comments.map((x, y) => {
      return (recentComment.innerHTML += `
      
      <div id=${y}>
            <span class="fw-name">${x.newEmail}</span><br><br>
            <span class="set-message">${x.newComment}</span><br><br>
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-reply" id ="reply"></i>
              <i onClick ="deleteTask(this);createWorks()" class="fas fa-trash-alt" id="delete"></i>
              <i ></i>
            </span>
      </div>
      `);
    });
  
    resetForm();
  };
  // let resetForm = () => {
  //   uploaded_image ="";
  //   textInput.value = "";
  //   dateInput.value = "";
  //   textarea.value = "";
  // };
  (() => {
    comment = JSON.parse(localStorage.getItem("messages")) || [];
    console.log(comment);
    createComments();
  })();