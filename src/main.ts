import './style.css'

const c = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = c.getContext("2d")!;
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();