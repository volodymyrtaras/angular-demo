import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './todo.service';

@Pipe({
    name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

    transform(todo: Todo[], search: string = ''): Todo[] {
        if (!search.trim()) {
            return todo;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return todo.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    }
}
