import { CdkDrag, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'volt-tetrimino',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './tetrimino.component.html',
  styleUrl: './tetrimino.component.css',
})
export class TetriminoComponent {
  isDragging = false;
  rotation = 0;

  @Input() pieceClass = 'blue';
  @Input() size: number = 1;

  getRotationStyle(): string {
    return `rotate(${this.rotation}deg)`;
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.rotation -= 90;
  }

  onMouseUp(event: MouseEvent): void {
    // Handle mouse up event
    if (event.button === 0 && !this.isDragging) {
      this.rotation += 90;
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
