import {
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TetriminoComponent } from '../tetrimino/tetrimino.component';

@Component({
  selector: 'volt-game-board',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDropListGroup, TetriminoComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {
  tray = ['blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red'];
  board = Array.from({ length: 100 }, () => []);

  drop(event: CdkDragDrop<any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
