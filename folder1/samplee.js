window.addEventListener("load", start, false);
document.addEventListener("mouseover", mouseover, false);
function start() {
    document.getElementById('move').addEventListener("mousemove", move, false);
    document.getElementById("over12").addEventListener("mouseover", over1, false);
    document.getElementById("out").addEventListener("mouseout", out1, false);
}
function move() {
    document.getElementById('move').innerHTML = "GOLDEN GROUPS - GOLDEN MAHAL" ;
}
function mouseover() {
    document.getElementById('over12').innerHTML = "Golden Mahal lives upto your expectations and beyond";
}
function over1() {
    document.getElementById("out").setAttribute("src", "img5.jpg");
  }

  function out1() {
    document.getElementById("out").setAttribute("src", "img2.jpg");
  }
