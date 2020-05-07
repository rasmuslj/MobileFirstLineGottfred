const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');



// klik på span 
toggleCollapse.onclick =()=>{
    nav.classList.toggle("collapse");
}