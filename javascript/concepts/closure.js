let hi = document.getElementById("header")
function setSize(size){
  return function sizeofthe(){
    hi.style.fontSize = `${size}px`;
  }
}
const btn = document.querySelector('.btn');
let size50 = setSize(50)
btn.addEventListener('click',()=>size())
