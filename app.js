setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = time.getDay();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = month;
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = day;
}
showTime();
