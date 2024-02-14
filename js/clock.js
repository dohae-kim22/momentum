const clock = document.querySelector("#clock");

function getTime() {
  const time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}

getTime();
setInterval(getTime, 1000);
