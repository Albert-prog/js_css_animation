function pageLoad() {

let array = [
  {
    tag: "h1",
    content: "Albert"
  },
  {
    tag: "p",
    content: "Lorem ipsum"
  }
];
let root = document.getElementById('root');

for (myObject of array) {
  
  document.getElementById('root').insertAdjacentHTML('beforeend',
    `<${myObject.tag}>${myObject.content}</${myObject.tag}>`);
};

  root.addEventListener('click',function(){ 
  root.classList.toggle('clicked');
 });

}

window.addEventListener('load', pageLoad);