import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { AppRoutingModule } from './ui-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [
    TodosComponent,
    HomeComponent,
    MainComponent
  ],
  exports: [
    TodosComponent,
    HomeComponent,
    MainComponent
  ],
})
export class UiModule {}
