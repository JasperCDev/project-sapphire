import { Entity } from "./entity";
import type { GridObject } from "./grid-object";

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
  mouse = new Mouse();

  constructor() {
    super();
  }

  update(deltaTime: number): void {

  }
}
