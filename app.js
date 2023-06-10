// *selector
const input=document.getElementById("todo-input")
// console.log(input);
const btn=document.querySelector("#todo-btn")
const ul=document.querySelector("#todo-ul")

//*
let arrList=[]





const enterList=()=>{
    let arrLi={
        id:new Date().getTime(),
        text:input.value    
    }
    const li=document.createElement("li")
    ul.prepend(li)
    
    const span=document.createElement("span")
    li.appendChild(span)
    
    const i=document.createElement("i")
    i.className=("fa-solid fa-trash")
    li.appendChild(i)   
    
    const text=document.createTextNode(input.value)
    span.prepend(text) 
    li.setAttribute("id",arrLi.id)
    // console.log(input.value);
    arrList.push(arrLi)
    console.log(arrList);
    input.value=""
    input.focus()
    
    
}
window.addEventListener("load",()=>{
    arrList = JSON.parse(localStorage.getItem("toDoList")) || []
    arrList.forEach((li) => pushList(li));
    // console.log(arrList);
    // console.log(JSON.parse(localStorage.getItem("toDoList")));
})


// console.log(ul);
btn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(!input.value){
        alert("Please enter what you want to do...")
    } else{
        enterList()    
        //*inner html ile çözümü
        // li.innerHTML=`${input.value} <span> <i class="fa-solid fa-trash"></i></span></li>` 
        localStorage.setItem("toDoList",JSON.stringify(arrList))
        input.value=""
        input.focus()
    }
  
})
ul.addEventListener("click", (e)=>{
if(e.target.classList.contains("fa-trash")){
    e.target.parentElement.remove()
    let id=e.target.parentElement.id
    arrList=arrList.filter((li)=>li.id!=id)
    console.log(arrList);
    localStorage.setItem("toDoList",JSON.stringify(arrList))

}
})

const pushList=({id,text})=>{

   const li=document.createElement("li")
    ul.prepend(li)
    
    const span=document.createElement("span")
    li.appendChild(span)
    
    const i=document.createElement("i")
    i.className=("fa-solid fa-trash")
    li.appendChild(i)   
  
    const text1=document.createTextNode(text)
    span.prepend(text1) 
    li.setAttribute("id",id)
   
    input.focus()  

}