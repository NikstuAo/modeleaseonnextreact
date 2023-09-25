let logo_clicks = 0;
document.getElementById("logoimg").onclick = function () {
  if (logo_clicks < 10) {
    logo_clicks += 1;
  } else {
    window.location.href = 'https://google.com/';
  }
}