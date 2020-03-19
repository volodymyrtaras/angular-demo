import {Component, OnInit} from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    loading = true;
    searchString = '';

    constructor(public todoService: TodoService) {
    }

    ngOnInit() {
        this.todoService.fetchTodo()
            .pipe(delay(1000))
            .subscribe(() => {
                this.loading = false;
            });
    }

    onChange(id: number) {
        this.todoService.onToggle(id);
    }

    removeTodo(id: number) {
        this.todoService.removeTodo(id);
    }
}
