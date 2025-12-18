import { Entity } from "./entity";
import { Grid } from "./grid";
import { Interaction } from "./interaction";
import "./style.css";

class Main extends Entity {
  grid = new Grid();
  interaction = new Interaction();
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  tileSize: number = 0;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
    super();
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    window.addEventListener("resize", () => this.setCanvasSize());
    this.setCanvasSize();
    this.setCanvasSize();
  }

  private setCanvasSize() {
    let widthPercent = window.innerWidth / 16000000;
    let heightPercent = window.innerHeight / 9000000;
    let smallestPercent = Math.min(widthPercent, heightPercent);
    this.canvasWidth = Math.round(16000000 * smallestPercent);
    this.canvasHeight = Math.round(9000000 * smallestPercent);
    this.tileSize = this.canvasHeight / Grid.ROW_COUNT;

    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }

  public draw(ctx: CanvasRenderingContext2D, dt: number): void {
    this.grid.draw(ctx, dt);
  }

  public update(dt: number): void {
    this.grid.update(dt);
  }
}

const main = new Main();

let prevTime = 0;

function gameLoop(time: number) {
  if (!prevTime) prevTime = time;
  const dt = (time - prevTime) / 1000;
  prevTime = time;
  main.update(dt);
  main.draw(main.context, dt);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
