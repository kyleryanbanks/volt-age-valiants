import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TetriminoComponent } from './tetrimino.component';

describe('TetriminoComponent', () => {
  let component: TetriminoComponent;
  let fixture: ComponentFixture<TetriminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetriminoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TetriminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
