$(document).click(function() {
    $('#boton1').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<h2>Alan</h2>'+
            '<br>'+
            '<img class="imag1" src="img/Alan.jpg" alt="Alan Rozzi">' +
            '<p>Hola! Soy Alan, autista y tengo 23. Actualmente estudio Programación y tengo conocimiento Junior de Full Stack con JavaScript. Mi serie favorita es "Breaking Bad".</p>' +
            '</div>'
        );
    });

    $('#boton2').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<h2>Gabriel</h2>'+
            '<br>'+
            '<img class="imag1" src="img/file.jpg" alt="Gabriel Casas">' +
            '<p>Hola! Soy Gabriel, tengo 26 años. Nací en Chubut pero actualmente vivo en Córdoba, soy estudiante de la tecnicatura en desarrollo de software, también voy al gym y en mis tiempos libres me gusta jugar videojuegos. Mi serie favorita es "The Sopranos"</p>' +
            '</div>'
        );
    });

    $('#boton3').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<h2>Jazmín</h2>'+
            '<br>'+
            '<img class="imag1" src="img/Jazmin.jpg" alt="Jazmín Amarilla">' +
            '<p>Hola! Soy Jazmín, tengo 36 años. Soy oriunda de Posadas, Misiones pero hace tres años vivo en la Ciudad de Buenos Aires. Me gusta la tecnología y aprender todo lo nuevo que llega. Me encanta trabajar con la primera infancia, por lo que me forme en Educación Inicial. Amo a los animales, especialmente a mis dos perritas, Nuni y Negra. Mi serie favorita es Game of Thrones.</p>' +
            '</div>'
        );
    });

    $('#boton4').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<h2>Martin</h2>'+
            '<br>'+
            '<img class="imag1" src="img/Martín.jpg" alt="Martín Vilariño">' +
            '<p>Hola! Soy Martín, el más veterano del grupo (tengo 48). Soy profesor en varias escuelas técnicas de CABA. Además trabajo en el rubro de las telecomunicaciones. Me gusta la tecnología y también viajar por el país. Mi serie favorita es "The big bang Theory"</p>' +
            '</div>'
        );
    });

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.myFunction = myFunction;

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

