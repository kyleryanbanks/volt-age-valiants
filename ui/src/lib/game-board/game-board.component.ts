import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'volt-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {}
