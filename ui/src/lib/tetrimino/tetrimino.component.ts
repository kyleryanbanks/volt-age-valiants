import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'volt-tetrimino',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './tetrimino.component.html',
  styleUrl: './tetrimino.component.css',
})
export class TetriminoComponent {
  rotation = 0;

  @Input() pieceClass = 'blue';
  @Input() size: number = 1;

  onClick(): void {
    this.rotation += 90;
  }

  getRotationStyle(): string {
    return `rotate(${this.rotation}deg)`;
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.rotation -= 90;
  }
}
