import { Entity } from "./entity";

export class Interaction extends Entity {

  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  mouseDown: boolean = false;
  mouseDownPosition: { x: number; y: number } = { x: 0, y: 0 };
  prevMouseDownPosition : { x: number; y: number } = { x: 0, y: 0 };

  constructor() {
    super();
    window.addEventListener("mousemove", (event) => {
      this.mousePosition.x = event.clientX;
      this.mousePosition.y = event.clientY;
    });
  }
}
