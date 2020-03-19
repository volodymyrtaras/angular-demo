import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from '../shared/todo.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

    title = '';

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
    }

    addTodo() {
        const todo: Todo = {
            title: this.title,
            id: Date.now(),
            completed: false,
            date: new Date()
        };
        this.todoService.addTodo(todo);
        this.title = '';
    }
}
