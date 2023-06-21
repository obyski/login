document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('btn');
  button.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "popup.html";
  });
});

