const btnIncrement = document.getElementById("add");
const btnDecrement = document.getElementById("remove");
const btnReset = document.getElementById("reset");

const output = document.getElementById("data");

let count = 0;

btnIncrement.onclick = () => {
  count++;
  output.innerHTML = count;
};

btnDecrement.onclick = () => {
  count--;
  output.innerHTML = count;
};

btnReset.onclick = () => {
  count = 0;
  output.innerHTML = count;
};
