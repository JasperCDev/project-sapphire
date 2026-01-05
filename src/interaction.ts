import { Entity } from "./entity";
import { Grid } from "./grid";
import type { GridObject } from "./grid-object";
import type { Tile } from "./tile";

export class Mouse {
  position: { x: number; y: number } = { x: 0, y: 0 };
  isDown: boolean = false;

  constructor() {
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    window.addEventListener("mouseup", this.handleMouseUp.bind(this));
    window.addEventListener("mousedown", this.handleMouseDown.bind(this));
  }

  private handleMouseMove(event: MouseEvent) {
    this.position.x = event.clientX;
    this.position.y = event.clientY;
  }
  private handleMouseUp(_event: MouseEvent) {
    this.isDown = false;
  }
  private handleMouseDown(_event: MouseEvent) {
    this.isDown = true;
  }
}

export class Interaction extends Entity {
  private mouse = new Mouse();

  constructor(
    private tiles: Tile[]
  ) {
    super();
  }

  update(deltaTime: number): void {
    // const hoveredPoint = this.getHoveredTilePoint();
  }
  // public getPointFromMousePosition(mousePos: { x: number; y: number }) {
  //       // x & y mouse position relative to the window
  //       let relX = mousePos.x - (window.innerWidth - this.gridWidth) / 2;
  //       let relY = mousePos.y - (window.innerHeight - this.gridHeight) / 2;

  //       // x & y remainder from tilesize
  //       let modX = relX % .TILE_SIZE;
  //       let modY = relY % this.tileSize;

  //       // x & y snapped to grid
  //       let snappedX = relX - modX;
  //       let snappedY = relY - modY;

  //       // row & col rounded from the tile count of x & y + 1
  //       return {
  //           row: Math.round(snappedY / this.tileSize + 1),
  //           col: Math.round(snappedX / this.tileSize + 1),
  //       };
  //   }
}
