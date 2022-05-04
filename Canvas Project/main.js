import canvas from 'canvas';
import fs from 'fs';

function save(picture) {
    const buffer = picture.toBuffer();
    fs.writeFileSync('./image.png', buffer);
}

function main() {
    const picture = canvas.createCanvas(400, 400);
    const ctx = picture.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 300, 0);

    // Gradient filled rectangle
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(.7, 'white');
    gradient.addColorStop(1, 'pink');
    ctx.fillStyle = gradient;
    ctx.fillRect(25, 25, 300, 100);

    // Shadow
    ctx.shadowColor = 'red';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;

    // Font
    ctx.fillStyle = 'blue';
    ctx.font = '30px serif';
    ctx.fillText('Hello Class', 50, 50);


    

    save(picture);


}

main();