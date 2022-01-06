const button = document.querySelector(".ripple");


button.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  let span = document.createElement('span')
  span.classList.add('circle')
  span.style.top = y + 'px'
  span.style.left = x + 'px'
  this.appendChild(span)
  
  setTimeout(() => {
    span.remove()
  }, 1000);
});


// button.addEventListener("click", function (e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   console.log(x,y)
//   const buttonTop = e.target.offsetTop;
//   const buttonLeft = e.target.offsetLeft;

//   console.log(buttonTop , buttonLeft)
//   const xInside =  x - buttonLeft;
//   const yInside =  y - buttonTop;
//   console.log(xInside, yInside);

//   const circle = document.createElement("span");
//   circle.classList.add("circle");

//   circle.style.top = yInside + "px";
//   circle.style.left = xInside + "px";

//   this.appendChild(circle);

//   setTimeout(() => {
//     circle.remove();
//   }, 500);
// });
