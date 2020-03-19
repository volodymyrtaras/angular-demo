import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoFilterPipe} from './shared/todo-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        TodoFormComponent,
        TodoFilterPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
