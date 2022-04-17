var print = "";
var t = "";
var back = false;
var caps = false;

function button_clicked_caps() {
  if (caps) caps = false;
  else {
    caps = true;
  }
}

function button_clicked(character) {
  if (caps) {
    print = print + character;
  } else {
    print = print + character.toLowerCase();
  }
  var output = document.getElementById("input");
  output.value = print;
}

function button_clicked_back() {
  var output = document.getElementById("input");
  output.value = output.value.substring(0, output.value.length - 1);
  print = "";
}

function button_clicked_submit() {
alert(document.getElementById('input').value);
}