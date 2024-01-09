import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

type DialogData = {
  id:number;
  title:string;
  completed:boolean;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatOptionModule,
    MatIconModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})


export class DialogComponent {
  item : DialogData = {
    id:0,
    title:"",
    completed:false
  }

  title:string = "Edit"
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    this.item.id = this.data.id
    this.item.title = this.data.title
    this.item.completed = this.data.completed
    if(this.item.id === 0){
      this.title = "Add"
    }
  }

  changeCompleted(){
    this.item.completed = !this.item.completed
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
