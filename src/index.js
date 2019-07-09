import './index.css'
let add=()=>{
    alert("add red  div");

    let div=document.createElement('div');
    div.innerHTML='second red';
    div.style.cssText='background-color:red';
    document.getElementsByTagName('div')[0].append(div);
    
}
add();