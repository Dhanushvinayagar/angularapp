import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  month: string[] = [];
  selectedValue: string = "";

  todoData: any = [];
  constructor(private service: HttpService, public dialog: MatDialog) {
    this.month = this.service.monthArray;
  }

  id: number = 0
  title: string = ''
  completed: boolean = false

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { id: this.id, title: this.title, completed: this.completed },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.service.putTodo(result)
        this.todoData = this.todoData.map((el: Todo) => {
          return el.id === result.id ? result : el;
        })
      }
    });
  }


  getData() {
    this.service.getTodo().subscribe(res => {
      this.todoData = res
    });
  }

  getCard(item: { id: number, title: string, completed: boolean }) {
    this.id = item.id
    this.title = item.title
    this.completed = item.completed
    this.openDialog()
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { id: 0, title: "", completed: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        result.id = this.todoData.length + 1
        const res = this.service.postTodo(result)
        if (result != null) {
          this.todoData = [...this.todoData, result]
        }
      }
    });
  }
  addCard() {
    this.openDialog1()
  }

  deleteCard(item: { id: number, title: string, completed: boolean }){
    this.service.deleteTodo(item)
    this.todoData = this.todoData.filter((el:Todo)=>{
      return el.id !== item.id
    })
  }
}
