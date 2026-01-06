import { Entity } from "./entity";
import type { GridObject } from "./grid-object";
import   { Interaction } from "./interaction";
import type { Main } from "./main";
import { Plant } from "./plant";
import { Tile } from "./tile";

export class Grid extends Entity {
  static ROW_COUNT = 18;
  static COL_COUNT = 32;
  private tiles = Array.from(
    { length: Grid.COL_COUNT * Grid.ROW_COUNT },
    (_, i) => new Tile(i, i % 2 === 0 ? "soil" : "grass")
  );
  public gridObjects = Array.from<GridObject | undefined>({
    length: Grid.COL_COUNT * Grid.ROW_COUNT,
  });
  interaction: Interaction;

  constructor(public tileSize: number, public width: number ,public height: number) {
    super();
    this.gridObjects[0] = new Plant(1, 1);
    this.interaction = new Interaction(this, this.tiles);
  }

  public draw(context: CanvasRenderingContext2D, dt: number): void {
    for (let tile of this.tiles) {
      tile.draw(context, dt);
    }
    for (let obj of this.gridObjects) {
      if (!obj) {
        continue;
      }
      obj.draw(context, dt);
    }
  }
}
