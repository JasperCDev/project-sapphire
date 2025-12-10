import { Grid } from "./grid";
import "./style.css";

class Main {
  grid = new Grid();
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  tileSize: number = 0;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
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
}

new Main();
