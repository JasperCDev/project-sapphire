import { Entity } from "./entity";
import { Grid } from "./grid";

class Point {
  constructor(public row: number, public col: number) {}
}

type TileType = "soil" | "grass";

export class Tile extends Entity {
  public row: number;
  public col: number;
  public id: string;
  static idHelper = 0;


  constructor(public index: number, public type: TileType = "soil") {
    super();
    let tilePoint = Tile.getPointFromIterator(this.index);
    this.id = Tile.getIdFromPoint(tilePoint);
    this.row = tilePoint.row;
    this.col = tilePoint.col;
  }

  draw(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    ctx.fillStyle = this.type === "soil" ? "#a0522d" : "#228b22";
    ctx.fillRect(
      (this.col - 1) * (ctx.canvas.height / Grid.ROW_COUNT),
      (this.row - 1) * (ctx.canvas.height / Grid.ROW_COUNT),
      ctx.canvas.height / Grid.ROW_COUNT,
      ctx.canvas.height / Grid.ROW_COUNT
    );
  }

  public onClick(): void {
    this.type = this.type === "soil" ? "grass" : "soil";
  }

  static getIteratorFromId(id: string) {
    let split = id.split("-");
    let rowCount = parseInt(split[0]);
    let colCount = parseInt(split[1]);
    return Grid.COL_COUNT * (rowCount - 1) + colCount - 1;
  }

  static getIteratorFromPoint(point: Point) {
    return (point.row - 1) * Grid.COL_COUNT + point.col - 1;
  }

  static getIdFromPoint(point: Point) {
    Tile.idHelper++;
    return (
      point.row.toString().padStart(2, "0") +
      "-" +
      point.col.toString().padStart(2, "0")
    );
  }

  static getPointFromIterator(i: number) {
    let n = i + 1;
    let row = Math.ceil(n / Grid.COL_COUNT);
    let col = n % Grid.COL_COUNT || Grid.COL_COUNT;
    return { row, col };
  }
}
