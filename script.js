function toggleNav() {
    var x = document.getElementById("myToggledNav");
    var y = document.getElementById("toggleBtn");
    if (x.style.display === "block") {
        y.innerHTML = "<i class='fa fa-bars fa-lg'></i>";
      x.style.display = "none";
    } else {
        
      y.innerHTML = "<i class='fa fa-times fa-lg' aria-hidden='true'></i>";
      x.style.display = "block";
    }
  }