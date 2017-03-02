var svg = document.getElementById("svg");
var b1 = document.getElementById("button-circle");
var b2 = document.getElementById("button-dvd");
var b3 = document.getElementById("button-stop");
var requestID;

function clear(event) {
  window.cancelAnimationFrame(requestID);
  while(svg.lastChild){
    svg.removeChild(svg.lastChild);
  }
}

function anim1() {
  var grow = 0;
  if (grow == 1){
    grow = 0;
  }else{
    grow = 1;
  }

  window.cancelAnimationFrame(requestID);
  clear();

  var r = 0;
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", "400");
  c.setAttribute("cy", "400");
  c.setAttribute("r", "50");
  c.setAttribute("fill", "blue");
  svg.appendChild(c);

  function growCircle(){
    requestID = window.requestAnimationFrame(growCircle);
    if (grow == 1){
      if (r < 200){
        c.setAttribute("r", r++);
      }else{
        grow = 0;
      }
    }
    if (grow == 0){
      if (r > 0){
        c.setAttribute("r", r--);
      }else{
        grow = 1;
      }
    }
  }
  growCircle();
}

function anim2() {
  x = Math.random() * 615;
  y = Math.random() * 715;
  xplus = 1;
  yplus = 1;

  window.cancelAnimationFrame(requestID);
  clear();

  var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
  d.setAttribute("x", x);
  d.setAttribute("y", y);
  d.setAttribute("width", 190);
  d.setAttribute("height", 96);
  d.setAttribute("href", "source.png");
  svg.appendChild(d);

  function drawDVD(){
    requestID = window.requestAnimationFrame(drawDVD);
    if (x > 615){
      xplus = -1;
    }
    if (x < 0){
      xplus = 1;
    }
    if (y > 715){
      yplus = -1;
    }
    if (y < 0){
      yplus = 1;
    }
    x += xplus;
    y += yplus;
    d.setAttribute("x", x);
    d.setAttribute("y", y);
  }
  drawDVD();
}

b1.addEventListener('click', anim1);
b2.addEventListener('click', anim2);
b3.addEventListener('click', clear);
