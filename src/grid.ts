import { Entity } from "./entity";

export class Grid extends Entity {
  static ROW_COUNT = 18;
  static COL_COUNT = 32;

  public draw(context: CanvasRenderingContext2D, dt: number): void {
    context.fillStyle = "#e0e0e0";
    for (let row = 0; row < Grid.ROW_COUNT; row++) {
      for (let col = 0; col < Grid.COL_COUNT; col++) {
        context.fillRect(
          col * (context.canvas.height / Grid.ROW_COUNT),
          row * (context.canvas.height / Grid.ROW_COUNT),
          context.canvas.height / Grid.ROW_COUNT -5,
          context.canvas.height / Grid.ROW_COUNT -5
        );
      }
    }
  }
}
