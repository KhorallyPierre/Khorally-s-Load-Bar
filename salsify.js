// load 100%
function load() {
  let bar = document.getElementById('progression');
  let width = document.querySelector('#input').value;
  if (!width) {
    width = 0
  }
  let identity = setInterval(move, 10);

  function move() {
    if (width >= 100) {
      clearInterval(identity);
      document.getElementById('message').innerText = "Loaded to 100%!"
    } else {
      width++;
      bar.style.width = width + '%';

    }
  }
}


document.querySelector('#input').addEventListener('keypress', function(e) {
  console.log(e.key)
  if (e.key === 'Enter') {
    let width = document.querySelector('#input').value
    if (!width) {
      width = 0
    }
    console.log(width)
    const bar = document.getElementById('progression');
    bar.style.width = width + '%';
    document.getElementById('message').innerText = `Loaded to ${width} %`
  }
})
document.querySelector('#button').addEventListener('click', load)

// There must be an input that allows the user to specify a valid starting percentage for the progress bar.
// After inputting a percentage, the progress bar updates upon pressing the ENTER key.
// The user must be able to reset the progress bar by clearing the input and pressing the ENTER key.
// There must be a button that allows the progress bar to run to completion (i.e., 100%) from the starting percentage.
// The progress bar must increment by 1% every 10 ms upon pressing this button.
// If the starting percentage is not specified, the progress bar should run from 0% to 100%.
