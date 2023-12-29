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
  @Input() pieceClass = 'blue';
  @Input() size: number = 1;
}
