//EVENTS
//mouse events
//form events
//keyboard events
//page events

//mouse events:
//onclock
/*
const btn = document.querySelector(".btn");
btn.onclick = handleClick; //avoid ();
function handleClick() {
  window.alert("button clicked");
}
//
const btn = document.querySelector(".btn");//addEventLisener which take two parameters 1)event 2)callback function
btn.addEventListener("click", function () {
  window.alert("button clicked");
});


//dblclick
const doubleClickevent = document.querySelector(".btn");
doubleClickevent.addEventListener("dblclick", function () {
  window.alert("double clicked");
});
*/
//hover event:

const hover = document.querySelector(".hover");
hover.addEventListener("mouseover", function () {
  hover.style.backgroundColor = "green";
});
const hover1 = document.querySelector(".hover");
hover1.addEventListener("mouseleave", function () {
  hover1.style.backgroundColor = "orange";
});
//
//FORM EVENTS:
//onchange:
const firstname1 = document.getElementById("firstname");
firstname1.addEventListener("onchange", function () {
  //console.log(firstname1.value);
});
//focus
firstname1.addEventListener("focus", function () {
  firstname1.style.outlineColor = "red";
});
//blur
firstname1.addEventListener("blur", function () {
  firstname1.style.border = "solid green";
});

//
//KEYBOARD EVENTS:
/*
keypress:it not possible for the "arrows"(up,down,left and right arrows),ctrl,shift.
keyup:when we press and leave only it will occur(to over come the limaitations their in keypress we use keyup)
keydown:to overcome from the limitation of keyup we use keydown
*/
document.addEventListener(/*"keyup" /*"keydown" */ "keypress", function (e) {
  console.log(e);
});
//
//PAGE EVENTS
//resize
//scroll
//resize

window.addEventListener("resize", function () {
  if (this.window.innerWidth < 700) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "orange";
  }
});

//scroll
window.addEventListener("scroll", function () {
  if (window.scrollY < 100) {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "royalblue";
  }
});
