import { Entity } from "./entity";

export class GridObject extends Entity {
  public row: number;
  public col: number;
  constructor(row: number, col: number) {
    super();
    this.row = row;
    this.col = col;
  }
}