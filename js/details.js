
// Get the modal
var modal = document.getElementById("myModal");

$(document).ready(function () {

    $('.type_skill').click(function (e) {         
        response = "";
        switch (e.target.innerText) {
            case "Html5":
              response = "Hice un curso muy corto (alrededor de unas 10 horas) por Internet sobre HTML y con eso aprendi a manejarlo de manera basica.";
              break;
            case "CSS3":
              response = "Antes de este ejercicio conocia los aspectos basicos sobre CSS sin embargo no lo habia utilizado antes.";
              break;
            case "Javascript":
               response = "Hice un curso muy corto por Internet sobre HTML y con eso aprendi a manejarlo de manera basica, cabe aclarar que el curso tenia pequeños proyectos que me ayudaron a entenderlo muy bien.";
              break;
            case "Vue": "Conoci este Framework en el curso de Proyecto Integrador I, sin embargo no lo domino totalmente."
              response = "";
              break;
            case "Communication": 
              response = "Me considero una persona que puede expresar sus ideas de manera clara y concisa.";
              break;
            case "Teamwork": 
              response = "El trabajo en equipo no es mi fuerte pero considero que me desenvuelvo bien siempre y cuando se definan de manera efectiva las tareas de los integrantes del equipo.";
              break;
            case "Creativity": 
              response = "Me considero una persona creativa dado que siempre estoy pensando en maneras diferentes y mejores de hacer las cosas, incluso en las actividades mas sencillas de la vida diaria";
              break;
            case "Dedication": 
              response = "Me considero una persona dedica dado que pongo el mayor esfuerzo en las cosas que realizo todos los dias con el fin de que queden lo mejor posible";
              break;
            case "Spring": 
              response = "Este Framework basado en Java lo utilice durante un año en trabajos universitarios especificamente en las materias de Commputacion en Internet y Proyecto Integrador 2.";
              break;
            case "Git": 
              response = "Aprendi ha usar esta herramienta en un curso de Git en Platzi.com";
              break;
            case "React": 
              response = "Me interesa conocer más sobre esta libreria dado que es una de las más demandadas en el desarrollo web actualmente. Tengo conocimientos muy basicos sobre como funciona.";
              break;
            case "Android Studio": 
              response = "Este IDE lo empece a usar hace 4 meses en el curso universitario de Aplicaciones Moviles donde lo aprendimos a manejar de manera avanzada desde la creación de un proyecto hasta la publicacion de una aplicación movil en la Play Store de Google.";
          }

          if(response != ""){
            modal.style.display = "block"
            $('.modal-content h2').html("Sobre " + e.target.innerText);
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