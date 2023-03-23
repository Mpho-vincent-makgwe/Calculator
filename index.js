let input = "";

function buttonClick(value) {
  input += value;
  document.getElementById("result").value = input;
}

function clearResult() {
  input = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = eval(input);
  document.getElementById("result").value = result;
  input = "";
}
