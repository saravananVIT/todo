const word=document.getElementById("list");
const list=document.getElementById("task");

function clickadd(){
    if(word.value ===''){
        alert("please enter the task");
    }else{
        let li=document.createElement("li");
        li.innerHTML=word.value;
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(li);
        li.appendChild(span);
    }
    word.value="";
    savedata();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("one");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showlist(){
    list.innerHTML=localStorage.getItem("data");
}
showlist();