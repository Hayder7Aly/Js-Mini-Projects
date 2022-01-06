let counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
  counter.innerHTML = ''
  function updateCounter(){
    let targetCounter = +counter.getAttribute('data-target')
    let startCounter = Number(counter.innerHTML)
    let incr = targetCounter / 100;
    if(startCounter < targetCounter){
      counter.innerHTML = `${Math.round(startCounter + incr)}`
      setTimeout(updateCounter , 10);
    }else{
      counter.innerHTML = targetCounter;
    }
  }
  updateCounter()
})