import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameBoardComponent, TetriminoComponent } from '@volt/ui';

@Component({
  standalone: true,
  imports: [GameBoardComponent, TetriminoComponent, RouterModule],
  selector: 'volt-age-valiants-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
