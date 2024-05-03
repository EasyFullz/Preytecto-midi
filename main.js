function playSonido(id) {
    var audio = document.getElementById(id);
    audio.currentTime = 0; // Reinicia el tiempo del audio a 0
    audio.play();
}

var botones = [
    { selector: '.tecla_pom', sonidoId: 'sonido_tecla_pom' },
    { selector: '.tecla_clap', sonidoId: 'sonido_tecla_clap' },
    { selector: '.tecla_tim', sonidoId: 'sonido_tecla_tim' },
    { selector: '.tecla_puff', sonidoId: 'sonido_tecla_puff' },
    { selector: '.tecla_splash', sonidoId: 'sonido_tecla_splash' },
    { selector: '.tecla_toim', sonidoId: 'sonido_tecla_toim' },
    { selector: '.tecla_psh', sonidoId: 'sonido_tecla_psh' },
    { selector: '.tecla_tic', sonidoId: 'sonido_tecla_tic' },
    { selector: '.tecla_tom', sonidoId: 'sonido_tecla_tom' }
];

botones.forEach(function(boton) {
    var elemento = document.querySelector(boton.selector);
    elemento.addEventListener('click', function() {
        playSonido(boton.sonidoId);
    });
});
