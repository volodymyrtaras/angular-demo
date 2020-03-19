import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    date?: any;
}

@Injectable({providedIn: 'root'})
export class TodoService {

    public todo: Todo[] = [];

    constructor(private http: HttpClient) {
    }

    fetchTodo(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .pipe(tap(todo => this.todo = todo));
    }

    onToggle(id: number) {
        const index = this.todo.findIndex(t => t.id === id);
        this.todo[index].completed = !this.todo[index].completed;
    }

    removeTodo(id: number) {
        this.todo = this.todo.filter(t => t.id !== id);
    }

    addTodo(todo: Todo) {
        this.todo.push(todo);
    }
}
