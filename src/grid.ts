export class Grid {
  static ROW_COUNT = 18;
  static COL_COUNT = 32;
  gridWidth: number = 0;
  gridHeight: number = 0;
  tileSize: number = 0;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  private init() {
    window.addEventListener("resize", () => this.setGridSize());
    this.setGridSize();
  }

  private setGridSize() {
    let widthPercent = window.innerWidth / 16000000;
    let heightPercent = window.innerHeight / 9000000;
    let smallestPercent = Math.min(widthPercent, heightPercent);
    this.gridWidth = Math.round(16000000 * smallestPercent);
    this.gridHeight = Math.round(9000000 * smallestPercent);
    this.tileSize = this.gridHeight / Grid.ROW_COUNT;

    this.canvas.width = this.gridWidth;
    this.canvas.height = this.gridHeight;
  }
}
