import { Entity } from "./entity";
import { Grid } from "./grid";

export class Plant extends Entity {
  public id: number;
  static idHelper = 0;

  constructor(public row: number, public col: number) {
    super();
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
