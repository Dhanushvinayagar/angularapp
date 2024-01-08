import { Component } from '@angular/core';

@Component({
  selector: 'app-angular17',
  standalone: true,
  imports: [],
  templateUrl: './angular17.component.html',
  styleUrl: './angular17.component.css'
})
export class Angular17Component {
  title = 'Angular 17';

  num1 = 2
  num2: number = 0

  list = []
  items: string[] = ["a", "b", "c", "d"]
}
