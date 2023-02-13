let count = 0;

const increment = document.getElementById("add");
increment.addEventListener("click", function () {
  count = count + 1;
  document.getElementById("data").innerText = count;
});

const decrement = document.getElementById("remove");
decrement.addEventListener("click", function () {
  count = count - 1;
  document.getElementById("data").innerText = count;
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  count = 0;
  document.getElementById("data").innerText = count;
});
