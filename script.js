let toggler = document.querySelector(".toggler");

let frameValue = "annually";
toggler.onclick = toggle;

function toggle() {
  if (toggler.querySelector("span").classList.contains("annually")) {
    toggler.querySelector("span").classList.remove("annually");
    toggler.querySelector("span").classList.add("monthly");
    frameValue = "monthly";
  } else {
    toggler.querySelector("span").classList.remove("monthly");
    toggler.querySelector("span").classList.add("annually");
    frameValue = "annually";
  }
}
