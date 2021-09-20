// function showMenu(id) {
//   let list = ['scale-up-ver-top','scale-down-ver-top'];
//   let element = document.getElementById(id);
//   list.map(cls => element.classList.toggle(cls));
// }

function showMenu(id) {
  let list = ['scale-y-0','scale-y-100'];
  let element = document.getElementById(id);
  list.map(cls => element.classList.toggle(cls));
}

// function showMenu(id) {
//   let element = document.getElementById(id)
//   if (element.classList.contains('scale-up-ver-top')){
//     element.classList.remove('scale-up-ver-top');
//     void element.offsetWidth;
//     let list = ['scale-down-ver-top', 'scale-y-100'];
//     list.map(cls => element.classList.toggle(cls));    
//     console.log(element.classList) 
//     // element.classList.add('scale-down-ver-top');
//   } else if (element.classList.contains('scale-down-ver-top')){
//     element.classList.remove('scale-down-ver-top');
//     void element.offsetWidth;    
//     let list = ['scale-up-ver-top','scale-y-0', 'scale-y-100'];
//     list.map(cls => element.classList.toggle(cls)); 
//     console.log(element.classList)    
//     // element.classList.add('scale-up-ver-top');
//   } else {
//     element.classList.remove('scale-down-ver-top');
//     let list = ['scale-up-ver-top','scale-y-0', 'scale-y-100'];
//     list.map(cls => element.classList.toggle(cls));    
//     console.log(element.classList)
//     // element.classList.add('scale-up-ver-top');
//   }
// }
