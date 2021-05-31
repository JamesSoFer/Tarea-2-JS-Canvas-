// Tarea 2

// let img = new Image();
// img.src = './example.png';
// ctx.drawImage(img, 30, 30, 300, 150);

let canvas, ctx;
let bttn = document.getElementById('btn');

bttn.addEventListener('click', ()=>{
    canvas = document.getElementById('animation');
    ctx = canvas.getContext('2d');

    canvas.style.backgroundImage = "none";
    canvas.style.backgroundColor = "rgb(192, 76, 82)";

    canvas.width = 600;
    canvas.height = 800;
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';

    let x = 100;
    let y = 100;

    // Translate text 
    ctx.save();
    ctx.beginPath();
    ctx.translate(200, 200);
    ctx.fillText('hello 📐', 20, 50);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // Rotate text 
    ctx.save();
    ctx.beginPath();
    ctx.rotate(Math.PI/4); 
    ctx.fillText('hello 🔄', 200, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // Scale text
    ctx.beginPath();
    ctx.translate(100, 500);
    ctx.scale(2, -4);
    ctx.fillText('hello 🔍', x, y);
    ctx.fill();
    ctx.closePath();

    
});
