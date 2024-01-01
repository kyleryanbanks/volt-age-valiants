import {
  CdkDrag,
  CdkDragEnd,
  CdkDragHandle,
  CdkDragStart,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { COLORS, SHAPES } from './tetrimino.models';

@Component({
  selector: 'volt-tetrimino',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './tetrimino.component.html',
  styleUrl: './tetrimino.component.css',
})
export class TetriminoComponent {
  COLORS = COLORS;
  SHAPES = SHAPES;
  isDragging = false;

  @Input() state: {
    shape: number;
    rotation: number;
  } = {
    shape: 0,
    rotation: 0,
  };

  onDraw(x: number, y: number) {
    return (
      SHAPES[this.state.shape][this.state.rotation] & (0x8000 >> (x * 4 + y))
    );
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.state.rotation = this.state.rotation > 0 ? this.state.rotation - 1 : 3;
  }

  onMouseUp(event: MouseEvent): void {
    // Handle mouse up event
    if (event.button === 0 && !this.isDragging) {
      this.state.rotation = (this.state.rotation + 1) % 4;
      console.log(SHAPES[this.state.shape][this.state.rotation].toString(16));
    }
  }

  onDragStart(event: CdkDragStart): void {
    // Set the flag to indicate dragging has started
    this.isDragging = true;
  }

  onDragEnd(event: CdkDragEnd): void {
    // Set the flag to indicate dragging has ended
    this.isDragging = false;
  }
}
