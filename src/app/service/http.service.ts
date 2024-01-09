import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Todo = {
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  BASE_URL: string = "http://localhost:3000"
  constructor(private http: HttpClient) {

  }

  monthArray: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  getTodo() {
    const data = this.http.get(`${this.BASE_URL}/todo`)
    return data
  }

  postTodo(data: Todo) {
    let res = this.http.post(`${this.BASE_URL}/todo`, data)
    res.subscribe(data => {
      return data;
    })
  }

  putTodo(data: Todo) {
    let res = this.http.put(`${this.BASE_URL}/todo/${data.id}`, data)
    res.subscribe(data => {
      return data;
    })
  }
  deleteTodo(data: Todo) {
    let res = this.http.delete(`${this.BASE_URL}/todo/${data.id}`)
    res.subscribe(data => {
      return data;
    })
  }
}
