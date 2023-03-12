const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const file=document.getElementById("myfile")
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");

const image_input = document.getElementById("image_input");
let uploaded_image="";

image_input.addEventListener("change",function(){
  const reader =new FileReader();
  
  reader.addEventListener("load",()=>{
    uploaded_image=reader.result;
    document.getElementById ("display_image").style.backgroundImage= `url("${uploaded_image}")`;
  })

  reader.readAsDataURL(this.files[0])
  console.log(uploaded_image)

})



form.addEventListener("submit", (e) => {
  e.preventDefault();
  // formValidation();

  // const image = document.getElementById("book-name").value;
  // const title = document.getElementById("book-author").value;
  // const content = document.getElementById("book-author").value;

  // have our values in one object
  const data = { image:uploaded_image,title:textInput.value,content:textarea.value };
console.log (data)
//   // interaction with the API endpoint
  fetch('http://localhost:3000/api/v1/blogs', {
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
  resetForm()
});

// let formValidation = () => {
//   if (textInput.value === "") {
//     console.log("failure");
//     msg.innerHTML = "Task cannot be blank";
//     return false
//   } else {
//     console.log("success");
//     msg.innerHTML = "";
//   }
//   acceptData();
//   add.setAttribute("data-bs-dismiss", "modal");
//   add.click();

//   (() => {
//     add.setAttribute("data-bs-dismiss", "");
//   })();
// };
// })
// let data = [];

// let acceptData = () => {
//   data.push({
//     uploaded_image,
//     text: textInput.value,
//     // date: dateInput.value,
//     description: textarea.value,
    
    
  // });}

  // localStorage.setItem("data", JSON.stringify(data));

  // console.log(data);
  // createTasks();
// })
// };
// createTasks = () => {
//   // .then( (createTasks) => {
//     const data=[]
//     data.push({
//     image:data.image,
//     title:blogs.data.title,
//     content:data.content  
//     })
//     console.log(data)
//   tasks_blog.innerHTML = "";
// data.map((x, y) => {
    // return (blog_tasks.innerHTML += `
    
    // <div id=${blog_tasks}>
    //      <img src="${uploaded_image}" class="img-blog"><br>
    //       <span class="fw-bold">${title}</span><br>
    //       <p>${content}</p><br>  
    //       <span class="options">
    //         <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
    //         <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt" id="del"></i>
    //       </span>
    // </div>
    // `);
  // }
// );
// }});

// }
//   resetForm();
// };
// let resetForm = () => {
//   uploaded_image ="";
//   textInput.value = "";
//   dateInput.value = "";
//   textarea.value = "";
// };

// let deleteTask = (e) => {
//   e.parentElement.parentElement.remove();

//   data.splice(e.parentElement.parentElement.id, 1);

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
// };
// let editTask = (e) => {
//   let selectedTask = e.parentElement.parentElement;
//   uploaded_image = selectedTask.children[0].innerHTML;
//   textInput.value = selectedTask.children[1].innerHTML;
//   dateInput.value = selectedTask.children[2].innerHTML;
//   textarea.value = selectedTask.children[3].innerHTML;

//   deleteTask(e);
// };
// (() => {
//   data = JSON.parse(localStorage.getItem("data")) || [];
//   console.log(data);
//   // createTasks();
// })();
// tasks_blog.innerHTML=""


// let acceptData = () => {


// fetch('http://localhost:3000/api/v1/blogs')
// .then((response) => response.json())
// .then((blogs) => {
//   console.log(blogs)

// blogs.data.forEach(blog => {
//   return (tasks_blog.innerHTML += `
    
//   <div id=${tasks_blog}>
//        <img src="${blog.image}" class="img-blog"><br>
//         <span class="fw-bold">${blog.title}</span><br>
//         <p>${blog.content}</p><br>  
//         <span class="options">
//           <i onclick= "editTask(${blog._id})" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
//           <button onclick ="deleteTask(${blog.title})" ><i  class="fas fa-trash-alt" id="del"></i> </button>
//         </span>
//   </div>
//   `);

  
//   })
//   resetForm()
// })



const tasks_blogs = document.getElementById("tasks");
fetch('http://localhost:3000/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
  console.log(blogs)

  blogs.data.forEach(blog => {
  const row = document.createElement("tr")
  const imageCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const contentCell = document.createElement("td")
  const actionsCell = document.createElement("td")
  

  const updateButton = document.createElement("button")
  const deleteButton = document.createElement("button")

  // assign values to the cells

  imageCell.innerHTML+=`<img src="${blog.image}" class="img-blog">`
  titleCell.textContent = blog.title;
  contentCell.textContent = blog.content;
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
  tasks_blogs.querySelector("tbody").appendChild(row)

  deleteButton.addEventListener("click", () => {
    deleteBlog(blog._id)
  })
  updateButton.addEventListener("click", () => {
    updateBlog(blog._id)
  })
})
})
function deleteBlog(id) {
  console.log(id)
  fetch(`http://localhost:3000/api/v1/blogs/${id}`, {
    method: "DELETE",   
     headers: {
      "Content-Type": "application/json, charset=UTF-8"
    },
    body: null
  })
  .then((response) => response.json())
  .then((blogs) => {
    // functionalities of delete
  })
  resetForm()
}
function updateBlog(id) {
  console.log(id)
  fetch(`http://localhost:3000/api/v1/blogs/${id}`, {
    method: "PUT",   
     headers: {
      "Content-Type": "application/json, charset=UTF-8"
    },
    body: JSON.stringify(id)
  })
  .then((response) => response.json())
  .then((data) => {
      let selectedTask = id.parentElement.parentElement;
  uploaded_image = selectedTask.children[0].innerHTML;
  textInput.value = selectedTask.children[1].innerHTML;
  dateInput.value = selectedTask.children[2].innerHTML;
  textarea.value = selectedTask.children[3].innerHTML;

  deleteBlog(id);
    // functionalities of delete
  })
  resetForm()
}

const resetForm=()=>{
  uploaded_image="";
  textInput.value=""
  textarea.value=""
}

