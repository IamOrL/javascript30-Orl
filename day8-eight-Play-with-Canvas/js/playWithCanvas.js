window.addEventListener('load', (event) => {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.widht = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function draw(event) {

    }

});