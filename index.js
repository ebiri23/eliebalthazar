alert('All the Elie Balthazar in one place is the official page of Elie Balthazar.')

var pos = document.getElementsByClassName("position");
var y;

for (y = 0; y < pos.length; y++) {
  pos[y].addEventListener("click", function() {

    this.classList.toggle("active");


    var accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
}