var countDownDate = new Date('May 21, 2022 00:00:00').getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)).toLocaleString(
    'en-US',
    { minimumIntegerDigits: 2, useGrouping: false }
  );
  var hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  var minutes = Math.floor(
    (timeleft % (1000 * 60 * 60)) / (1000 * 60)
  ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000).toLocaleString(
    'en-US',
    { minimumIntegerDigits: 2, useGrouping: false }
  );

  // Result is output to the specific element
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = minutes;
  document.getElementById('secs').innerHTML = seconds;

  // Display the message when countdown is over
  // if (timeleft < 0) {
  //   clearInterval(myfunc);
  //   document.getElementById('days').innerHTML = '';
  //   document.getElementById('hours').innerHTML = '';
  //   document.getElementById('mins').innerHTML = '';
  //   document.getElementById('secs').innerHTML = '';
  // document.getElementById('end').innerHTML = 'TIME UP!!';
  // }
}, 1000);
const switcher = document.getElementById('corazon');

switcher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  // var className = document.body.className;
  // if (className == 'dark-theme') {
  //   this.textContent = 'Light';
  // } else {
  //   this.textContent = 'Dark';
  // }
});
