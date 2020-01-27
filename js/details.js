
// Get the modal
var modal = document.getElementById("myModal");

$(document).ready(function () {

    $('.type_skill').click(function (e) {         
        response = "";
        switch (e.target.innerText) {
            case "Html5":
              response = "Hice un curso muy corto (alrededor de unas 10 horas) por Internet sobre HTML y con eso aprendi a manejarlo ";
              break;
            case "CSS3":
              response = "";
              break;
            case "Javascript":
               response = "";
              break;
            case "Vue":
              response = "";
              break;
            case 4: "Communication"
              response = "";
              break;
            case 5: "Teamwork"
              response = "";
              break;
            case 6: "Creativity"
              response = "";
          }

          if(response != ""){
            modal.style.display = "block"
            $('.modal-content p').html(response);
            
          }

    });
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}