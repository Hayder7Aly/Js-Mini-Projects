const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");

let text = createRandomText();
let idx = 1;
let speed = 300 / speedElement.value;

function writeText() {
  textElement.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
    text = createRandomText();
  }
  setTimeout(writeText, speed);
}

writeText();

speedElement.addEventListener("input", (e) => {
  speed = 300 / speedElement.value;
});

function createRandomText() {
  const arrText = [
    "Hayder Aly",
    "Web Developer",
    "React FrameWork",
    "Python Great",
    "NodeJs MERN",
  ];
  return arrText[Math.floor(Math.random() * arrText.length)];
}
