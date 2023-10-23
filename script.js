let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Estefania Estrada')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Desarrollo web')
    .pauseFor(2500)
    .deleteChars(14)
    .start();