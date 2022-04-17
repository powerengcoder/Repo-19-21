
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
  var inputs = document.getElementsByTagName("input") ;
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (input.type == 'text' || input.type == 'password') {
      input.value = print;
    }
}
}

function button_clicked_back() {
  var inputs = document.getElementsByTagName("input") ;
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (input.type == 'text' || input.type == 'password') {
      input.value = input.value.substring(0, input.value.length - 1);
      print="";
    }
}
}

function button_clicked_s() {
  var inputs = document.getElementsByTagName("input") ;
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (input.type == 'text' || input.type == 'password') {
      alert(input.value);
    }
}
}

function button_clicked_e() {
  var inputs = document.getElementsByTagName("input") ;
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (input.type == 'text' || input.type == 'password') {
      alert("Do you want to Submit?");
    }
}
}
