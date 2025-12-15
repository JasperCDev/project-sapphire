import { Entity } from "./entity";
import { Tile } from "./tile";

export class Grid extends Entity {
  static ROW_COUNT = 18;
  static COL_COUNT = 32;
  private tiles = Array.from(
    { length: Grid.COL_COUNT * Grid.ROW_COUNT },
    (_, i) => new Tile(i, i % 2 === 0 ? "soil" : "grass")
  );

  public draw(context: CanvasRenderingContext2D, dt: number): void {
    context.fillStyle = "#e0e0e0";
    for (let tile of this.tiles) {
      tile.draw(context, dt);
    }
  }
}
