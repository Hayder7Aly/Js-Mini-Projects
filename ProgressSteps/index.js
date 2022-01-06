const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
//Add event on next button
next.addEventListener("click", () => {
  currentActive++;
  //   console.log(currentActive);
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
    // console.log(currentActive);
  update();
});

//Add event on prev button
prev.addEventListener("click", () => {
  currentActive--;
  //   console.log(currentActive);
  if (currentActive < 1) {
    currentActive = 1;
  }
  //   console.log(currentActive);
  update();
});
//Update function for update DOM:

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = ((actives.length - 1)  / (circles.length - 1) * 100 + '%');


  if(currentActive === 1){
      prev.disabled = true;

  }else if (currentActive === circles.length){
      next.disabled = true;
  }else{
      prev.disabled = false;
      next.disabled = false;
  }

}