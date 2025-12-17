import { Grid } from "./grid";
import { GridObject } from "./grid-object";

export class Plant extends GridObject {
  public id: number;
  static idHelper = 0;

  constructor(row: number, col: number) {
    super(row, col);
    this.id = ++Plant.idHelper;
  }

  draw(ctx: CanvasRenderingContext2D, _deltaTime: number): void {
    ctx.fillStyle = "#32CD32";
    ctx.arc(
      (this.col - 0.5) * (ctx.canvas.height / Grid.ROW_COUNT),
      (this.row - 0.5) * (ctx.canvas.height / Grid.ROW_COUNT),
      ctx.canvas.height / Grid.ROW_COUNT / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}
