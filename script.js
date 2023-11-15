var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // Set the first accordion as open by default
  if (i === 1) {
    acc[i].classList.add("active");
    var panel = acc[i].nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  acc[i].addEventListener("click", function() {
    // Close all other accordions
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        var otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null;
      }
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

