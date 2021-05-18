// load 100%
let width = 0
    const bar = document.getElementById('progression');

function getWidth() {
  let w = Number(document.querySelector('#input').value);
  // number turns empty string to 0
  if (isNaN(w)) {
    alert('please enter a valid number')
  } else if (w > 100 || w < 0) {
    alert('please enter a number between 0 and 100')
  } else {
    width = w
    bar.style.width = width + '%';
    document.getElementById('message').innerText = `Loaded to ${width} %`
  }
}


function load() {
  //setInterval makes it so that the function gets called every 10ms
  let identity = setInterval(move, 10);
  function move() {
    if (width >= 100) {
      clearInterval(identity);
      // assumption 1: when 'run' is clicked when it's 100% the bar remains the same
      document.getElementById('message').innerText = "Loaded to 100%!"
    } else {
      width++;
      bar.style.width = width + '%';

    }
  }
}

// assumption 2: if 'run' is clicked with a number in the input, the bar will not load to that number
document.querySelector('#input').addEventListener('keypress', function(e) {
  console.log("this is the key" + e.keyCode)
  if (e.keyCode === 13) {
    getWidth()

  }
})
document.querySelector('#button').addEventListener('click', load)

// There must be an input that allows the user to specify a valid starting percentage for the progress bar.
// After inputting a percentage, the progress bar updates upon pressing the ENTER key.
// The user must be able to reset the progress bar by clearing the input and pressing the ENTER key.
// There must be a button that allows the progress bar to run to completion (i.e., 100%) from the starting percentage.
// The progress bar must increment by 1% every 10 ms upon pressing this button.
// If the starting percentage is not specified, the progress bar should run from 0% to 100%.
