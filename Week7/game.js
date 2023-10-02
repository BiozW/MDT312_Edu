window.onload = pageLoad;

function pageLoad() {
  document.getElementById('start').onclick = startGame;
}

function startGame() {
  timeStart();
  addBox();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var seconds = 1*parseInt(document.getElementById('numbox').value); // Set the game timer to 10 seconds
    var x = document.getElementById('clock');
    var remainingTime = seconds;

    // Setting timer using setInterval function
    timer = setInterval(timeCount , TIMER_TICK);

    function timeCount() {
      var allbox = document.querySelectorAll("#layer div");
      if (allbox.length === 0 && remainingTime > 0) {
        clearInterval(timer);
        x.innerHTML = "You Win!!!";
        clearScreen();
      } else if (remainingTime === 0 && allbox.length > 0) {
        clearInterval(timer);
        x.innerHTML = "You're Loser";
        clearScreen();
      } else {
        x.innerHTML = remainingTime + "s";
        remainingTime--;
      }
    }
}


function addBox() {
  clearScreen();
  var numbox = parseInt(document.getElementById('numbox').value);
  var gameLayer = document.getElementById('layer');
  var colorDrop = document.getElementById('color').value;

  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement('div');
    tempbox.className = 'square';
    tempbox.id = "box" + i;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    tempbox.style.backgroundColor = colorDrop;
    // Add element to HTML node
    gameLayer.appendChild(tempbox);
    bindBox(tempbox);
  }
}

function bindBox(box) {
  // When clicked, the box will disappear
  box.onclick = function () {
    box.parentNode.removeChild(box);
  };
}

function clearScreen() {
  // Remove all the div nodes representing boxes
  var allbox = document.querySelectorAll("#layer div");
  for (var i = 0; i < allbox.length; i++) {
    allbox[i].parentNode.removeChild(allbox[i]);
  }
}