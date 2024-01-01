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
  tray = Array.from({ length: 7 }, (_, shape: number) => ({
    shape,
    rotation: 0,
  }));
  board = Array.from({ length: 144 }, () => []);

  drop(event: CdkDragDrop<any>) {
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

  onShuffle() {
    console.log(this.tray);
    this.shuffleArrayIndexes(this.board);
  }

  shuffleArrayIndexes(array: string[][]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
