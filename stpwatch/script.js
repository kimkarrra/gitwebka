(function () {
  var startButton = document.querySelector("#jsstart")
  var stopButton = document.querySelector("#jsstop")
  var resetButton = document.querySelector("#jsreset")
  var stopwatch = document.querySelector("#js--stopwatch")

  var time = 0; 

  function hide(element) {
    element.classList.add("u-display-none");
  }

  function show(element) {
    element.classList.remove("u-display-none");
  }

  function disable(element, boolean) {
    if (boolean) {
      element.disabled = true
    } else {
      element.disabled = false;
    }
  }

  function display(time) {
    var centiseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor(time / 1000) % 60;
    var minutes = Math.floor(Math.floor(time / 1000) / 60);


    if (centiseconds < 10) {
      centiseconds = "0" + centiseconds.toString();
    } else {
      centiseconds = centiseconds.toString();
    }

    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    } else {
      seconds = seconds.toString();
    }
 
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    } else {
      minutes = minutes.toString();
    }

    stopwatch.innerHTML = minutes + ":" + seconds + "." + centiseconds;
  }

  display(0);

  var stopwatchTimerId;
  startButton.addEventListener("click", function () {
    hide(startButton);
    show(stopButton);
    disable(resetButton, true);


    var startTime = new Date(),
      currentTime,
      actualTime,
      toAdd = 0;

    stopwatchTimerId = setInterval(function () {
      currentTime = new Date();
      actualTime = currentTime - startTime + toAdd;

      time = time + 10;

      if (actualTime - time !== 0) {
        if (actualTime - time < -10) {
          toAdd = time - actualTime;
        } else {
          time = actualTime;
        }
      }

      display(time);
    }, 10);
  });

  stopButton.addEventListener("click", function () {
    hide(stopButton);
    show(startButton);
    disable(resetButton, false);

    if (stopwatchTimerId) clearInterval(stopwatchTimerId);
  });

  resetButton.addEventListener("click", function () {
    disable(resetButton, true);

    time = 0;

    display(0);
  });
})();
