$(document).click(function() {
    $('#boton1').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<img src="img/Tbbth.jpg" alt="The Big Bang Theory">' +
            '<p>The Big Bang Theory (también conocida como La teoría del Big Bang en Hispanoamérica o Big Bang en España) es una comedia de situación estadounidense creada por Chuck Lorre y Bill Prady, quienes se desempeñaron como productores ejecutivos y escritores principales de la serie, junto con Steven Molaro. Se emitió en CBS del 24 de septiembre de 2007 al 16 de mayo de 2019, con 12 temporadas y 279 episodios. El programa se centró originalmente en cinco personajes que vivían en Pasadena, California: Leonard Hofstadter (Johnny Galecki) y Sheldon Cooper (Jim Parsons), ambos físicos de Caltech, que comparten apartamento; Penny (Kaley Cuoco), una camarera y aspirante a actriz que vive al otro lado del pasillo; y los amigos y compañeros de trabajo igualmente geek y socialmente incómodos de Leonard y Sheldon, el ingeniero aeroespacial Howard Wolowitz (Simon Helberg) y el astrofísico Raj Koothrappali (Kunal Nayyar). Con el tiempo, personajes secundarios fueron promovidos a papeles protagónicos, incluida la neurocientífica Amy Farrah Fowler (Mayim Bialik), la microbióloga Bernadette Rostenkowski (Melissa Rauch) y el dueño de una tienda de cómics Stuart Bloom (Kevin Sussman).</p>' +
            '</div>'
        );
    });

    $('#boton2').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<img src="img/GOT.jpg" alt="Game of Thrones">' +
            '<p>Game of Thrones (conocida como Juego de tronos en España, El juego de tronos en Hispanoamérica y abreviada como GOT) es una serie de televisión de drama y fantasía medieval desarrollada por David Benioff y D. B. Weiss y producida por la cadena HBO. Su argumento está inspirado en la serie de novelas Canción de hielo y fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos que conforman el territorio.</p>' +
            '</div>'
        );
    });

    $('#boton3').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<img src="img/TS.jpg" alt="The Sopranos">' +
            '<p>Los Soprano (en inglés, The Sopranos) es una serie de televisión estadounidense creada y producida por David Chase y HBO. La serie se estrenó en Estados Unidos el 10 de enero de 1999 por el canal de televisión por cable HBO, que la emitió ininterrumpidamente hasta su desenlace, el 10 de junio de 2007. La trama de la serie gira en torno al mafioso de Nueva Jersey Tony Soprano (James Gandolfini) y las dificultades que enfrenta tanto en su hogar como en la organización criminal que dirige, y la historia de los personajes cercanos a Tony, especialmente su esposa Carmela (Edie Falco) y su sobrino y protegido Christopher Moltisanti (Michael Imperioli).</p>' +
            '</div>'
        );
    });

    $('#boton4').click(function(){
        $('#content').html(
            '<div class="content-container">' +
            '<img src="img/BB.jpg" alt="Breaking Bad">' +
            '<p>Breaking Bad es una serie de televisión estadounidense que se emitió entre 2008 y 2013, creada y producida por Vince Gilligan. Narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia, comienza a cocinar y vender metanfetamina junto con Jesse Pinkman (Aaron Paul), un antiguo alumno suyo. La serie, ambientada y producida en Albuquerque (Nuevo México), se caracteriza por sus escenarios desérticos y por la tendencia en la historia de poner a sus personajes en situaciones que aparentemente no tienen salida, lo que llevó a que su creador la describa como un wéstern contemporáneo.</p>' +
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


/*$(document).ready(function() {
    $('#boton1').click(function(){
        $('#imag1').replaceWith('<img id="imag1" src="img/Tbbth.jpg">');
        $("p").replaceWith('<p>The Big Bang Theory (también conocida como La teoría del Big Bang en Hispanoamérica o Big Bang1​ en España) es una comedia de situación estadounidense creada por Chuck Lorre y Bill Prady, quienes se desempeñaron como productores ejecutivos y escritores principales de la serie, junto con Steven Molaro. Se emitió en CBS del 24 de septiembre de 2007 al 16 de mayo de 2019, con 12 temporadas y 279 episodios. El programa se centró originalmente en cinco personajes que vivían en Pasadena, California: Leonard Hofstadter (Johnny Galecki) y Sheldon Cooper (Jim Parsons), ambos físicos de Caltech, que comparten apartamento; Penny (Kaley Cuoco), una camarera y aspirante a actriz que vive al otro lado del pasillo; y los amigos y compañeros de trabajo igualmente geek y socialmente incómodos de Leonard y Sheldon, el ingeniero aeroespacial Howard Wolowitz (Simon Helberg) y el astrofísico Raj Koothrappali (Kunal Nayyar). Con el tiempo, personajes secundarios fueron promovidos a papeles protagónicos, incluida la neurocientífica Amy Farrah Fowler (Mayim Bialik), la microbióloga Bernadette Rostenkowski (Melissa Rauch) y el dueño de una tienda de cómics Stuart Bloom (Kevin Sussman).</p>');
    });

    $('#boton2').click(function(){
        $('#imag1').replaceWith('<img id="imag1" src="img/GOT.jpg">');
        $("p").replaceWith('<p>Game of Thrones (conocida como Juego de tronos en España, El juego de tronos en Hispanoamérica y abreviada como GOT) es una serie de televisión de drama y fantasía medieval desarrollada por David Benioff y D. B. Weiss y producida por la cadena HBO. Su argumento está inspirado en la serie de novelas Canción de hielo y fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos que conforman el territorio.</p>');
    });

    $('#boton3').click(function(){
        $('#imag1').replaceWith('<img id="imag1" src="img/TS.jpg">');
        $("p").replaceWith('<p>Los Soprano (en inglés, The Sopranos) es una serie de televisión estadounidense creada y producida por David Chase y HBO. La serie se estrenó en Estados Unidos el 10 de enero de 1999 por el canal de televisión por cable HBO, que la emitió ininterrumpidamente hasta su desenlace, el 10 de junio de 2007. La trama de la serie gira en torno al mafioso de Nueva Jersey Tony Soprano (James Gandolfini) y las dificultades que enfrenta tanto en su hogar como en la organización criminal que dirige, y la historia de los personajes cercanos a Tony, especialmente su esposa Carmela (Edie Falco) y su sobrino y protegido Christopher Moltisanti (Michael Imperioli).</p>');
    });

    $('#boton4').click(function(){
        $('#imag1').replaceWith('<img id="imag1" src="img/BB.jpg">');
        $("p").replaceWith('<p>Breaking Bad es una serie de televisión estadounidense que se emitió entre 2008 y 2013, creada y producida por Vince Gilligan. Narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia, comienza a cocinar y vender metanfetamina4​ junto con Jesse Pinkman (Aaron Paul), un antiguo alumno suyo. La serie, ambientada y producida en Albuquerque (Nuevo México), se caracteriza por sus escenarios desérticos y por la tendencia en la historia de poner a sus personajes en situaciones que aparentemente no tienen salida, lo que llevó a que su creador la describa como un wéstern contemporáneo.</p>');
    });

    // Función para el dropdown
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Exponer myFunction al ámbito global
    window.myFunction = myFunction;

    // Cerrar el menú desplegable si el usuario hace clic fuera de él
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
});*/