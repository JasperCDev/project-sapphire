import { Grid } from "./grid";
import "./style.css";

class Main {
  grid: Grid;

  constructor() {
    const c = document.getElementById("myCanvas") as HTMLCanvasElement;
    const ctx = c.getContext("2d")!;
    this.grid = new Grid(c);
  }
}

new Main();
