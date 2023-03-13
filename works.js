let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let file=document.getElementById("myfile")
let msg = document.getElementById("msg");
let tasks_work = document.getElementById("tasks_work");
let add = document.getElementById("add");

const image_input = document.getElementById("image_input");
var uploaded_image="";

image_input.addEventListener("change",function(){
  const reader =new FileReader();
  reader.addEventListener("load",()=>{
    uploaded_image=reader.result;
    document.getElementById ("display_image").style.backgroundImage= `url("${uploaded_image}")`;
  })

  reader.readAsDataURL(this.files[0])
})
console.log(uploaded_image)


form.addEventListener("submit", (e) => {
  e.preventDefault();


  // have our values in one object
  const data = { image:uploaded_image,title:textInput.value,content:textarea.value };
console.log (data)
//   // interaction with the API endpoint
  fetch('http://localhost:3000/api/v1/works', {
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
    if (data.ok){
      alert(data.message)
    } else {
      alert(data.errors)
    }
  })
  .catch(error => alert(error))
  resetForm();
});


fetch('http://localhost:3000/api/v1/works')
.then((response) => response.json())
.then((works) => {
  console.log(works)

  // works.data.forEach(work => {


    // tasks_work.innerHTML=""
    // works.data.forEach(work => {
    //   return (tasks_work.innerHTML += `
        
    //   <div id=${tasks_work}>
    //        <img src="${work.image}" class="img-blog"><br>
    //         <span class="fw-bold">${work.title}</span><br>
    //         <p>${work.content}</p><br>  
    //         <span class="options">
    //           <i onclick= "editTask()" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
    //           <i onclick ="deleteWork(${work._id})" class="fas fa-trash-alt" id="del"></i>
    //         </span>
    //   </div>
    //   `     

    //   );

      // })
      const tasks_works = document.getElementById("tasks");
fetch('http://localhost:3000/api/v1/works')
.then((response) => response.json())
.then((works) => {
  console.log(works)

  works.data.forEach(work => {
  const row = document.createElement("tr")
  const imageCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const contentCell = document.createElement("td")
  const actionsCell = document.createElement("td")
  

  const updateButton = document.createElement("button")
  const deleteButton = document.createElement("button")

  // assign values to the cells

  imageCell.innerHTML+=`<img src="${work.image}" class="img-blog">`
  titleCell.textContent = work.title;
  contentCell.textContent = work.content;
  updateButton.textContent = "update"
  deleteButton.textContent = "delete"

  actionsCell.appendChild(updateButton)
  actionsCell.appendChild(deleteButton)
  console.log(row)

  // append rows
  row.appendChild(imageCell)
  row.appendChild(titleCell)
  row.appendChild(contentCell)
  row.appendChild(actionsCell)

  // append table body
  tasks_works.querySelector("tbody").appendChild(row)

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault
    deleteWork(work._id)
  })
  updateButton.addEventListener("click", (e) => {
    
    updateWork(work)
  })
})
})
function deleteWork(id) {
  console.log(id)
  if (confirm("Are you sure you want to delete?")) {
  fetch(`http://localhost:3000/api/v1/works/${id}`, {
    method: "DELETE",   
     headers: {
      "Content-Type": "application/json, charset=UTF-8"
    },
    body: null
  })
  .then((response) => response.json())
  .then((data) => {
  
      
        if (data.ok){
        alert(data.message)  
        } 
        else {
          alert(data.errors)
        }
        window.location.reload();
    

  })
  .catch(error => alert(error))
  resetForm()
} else {
    alert("No Work deleted")
}
}

      // resetForm()
      // deleteTask()
})
// })
const resetForm=()=>{
  uploaded_image="";
  textInput.value=""
  textarea.value=""
}
function updateWork(work) {
  const tasks_works =document.getElementById("tasks_work")
  return (tasks_works.innerHTML += `
    
   <div id=${tasks_works}>
       <img src="${work.image}" class="img-blog"><br>
         <span class="fw-bold">${work.title}</span><br>
         <p>${work.content}</p><br>  
         <span class="options">
           <i  data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
         </span>
  </div>
   `);
}
const edit= document.getElementById("edit")

function editTask(data){
  console.log(data)
}
edit.onclick=editTask()
//  let editTask = (id) => {
//    let selectedTask = id.parentElement.parentElement;
//   parentElement.image.value = selectedTask.children[0].innerHTML;
//   parentElement.title.value = selectedTask.children[1].innerHTML;
//   parentElement.content.value = selectedTask.children[2].innerHTML;
    // fetch(`http://localhost:3000/api/v1/works`, {  
    //  headers: {
    //   "Content-Type": "application/json, charset=UTF-8"
    // },})
    // .then((response) => {
    //   return response.json()
    // })
    // console.log(work)
    // .then((data) => {
      
    //   // if (data.ok){
    //   //   alert(data.message)
    //   // } else {
    //   //   alert(data.errors)
    //   // } 
    // })
    // console.log(data)
  // const data = { image:uploaded_image,title:textInput.value,content:textarea.value };
 

  // deleteTask(e);
//  }
//  let deleteTask = (e) => {
  // e.parentElement.parentElement.remove();

  // work.splice(e.parentElement.parentElement.id, 1);
  // localStorage.setItem("data", JSON.stringify(data));

  // fetch(`http://localhost:3000/api/v1/works`, {
  //    method:"PUT",
  //    headers: {
  //     "Content-Type": "application/json, charset=UTF-8"
  //   },
  //   body: JSON.stringify(data)
   
  //  })
  
  // .then((response) => {
  //   return response.json()
  // })
  // .then((data) => {
  //   if (data.ok){
  //     alert(data.message)
  //   } else {
  //     alert(data.errors)
  //   } 
  // })
  // .catch(error => alert(error))
  // resetForm();
// };

  // console.log(work);
  // console.log("jjjj")

// (() => {
//   data = JSON.parse(localStorage.getItem("data")) || [];
//   console.log(data);
  // createTasks();
// })();
  // fetch(`http://localhost:3000/api/v1/works/${id}`, {
  //   method: "PUT",   
  //    headers: {
  //     "Content-Type": "application/json, charset=UTF-8"
  //   },
  //   body: JSON.stringify(id)
  //  })
  //  .then((response) => response.json())
  //  .then((data) => {
  //   console.log(data)
  //   if (data.ok){
  //     alert(data.message)
  //   } else {
  //     alert(data.errors)
  //   }

  
    // functionalities of delete
  
  resetForm()


// function deleteWork(_id){
//   const workId= 
//   console.log()
// // e.preventDefault()
// // const id=document.getElementById("workId").textContent
//   // fetch(`http://localhost:3000/api/v1/works/${id}`, {
//   //   method: 'DELETE',
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // }).then(() => {

//   //    console.log('removed');
//   // }).catch(err => {
//   //   console.error(err)
//   // });
// }