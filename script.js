let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Estefania Estrada')
    .pauseFor(1000)  
    // .deleteChars(17)
    // .pauseFor(1000)  
    .start();