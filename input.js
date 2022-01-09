const crtAns = ["A", "B1"];
let form = document.querySelector("form");
const numb = document.querySelector(".number");
let leftRotor = document.querySelector(".k1");
let rightRotor = document.querySelector(".k2");
let clock = document.querySelector(".display");

let temp = 0,
  cnt;
let id;
// this function for rotation of this progress barr

let rotateX = () => {
  if (temp <= 50) {
    leftRotor.style.transform = `rotate(${temp * 3.6}deg)`;
  } else if (temp <= 100) {
    rightRotor.style.transform = `rotate(${(temp - 50) * 3.6}deg)`;
  }
  if (temp == cnt) {
    clearInterval(id);
  }

  temp += 1;
};

// submit event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userScore = 0;
  for (let i = 1; i <= 3; i++) {
    if (crtAns[i - 1] === form[`Q${i}`].value) {
      userScore++;
    }
  }
  clock.classList.toggle("hidden");

  id = setInterval(rotateX, 50);
  cnt = (userScore / 3) * 100;
  //rounding off becoz our condition is incrementing by 1 so ...
  cnt = Math.round(cnt);
  console.log(cnt);
  numb.innerHTML = cnt + "%";
  //function to create counting effect
  let counter = 0;
  setInterval(() => {
    if (counter == cnt) {
      clearInterval();
    } else {
      counter += 1;
      numb.textContent = counter + "%";
    }
  }, 50);
});
