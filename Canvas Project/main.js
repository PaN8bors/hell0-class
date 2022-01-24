import canvas from 'canvas';
import fs from 'fs';

function save(picture) {
    const buffer = picture.toBuffer();
    fs.writeFileSync('./image.png', buffer);
}

function main() {
    const picture = canvas.createCanvas(400, 400);
    const ctx = picture.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(25, 25, 300, 100);
    ctx.fillStyle = 'blue';
    ctx.font = '30px serif';
    ctx.fillText('Hello Class', 50, 50);
    

    save(picture);


}

main();