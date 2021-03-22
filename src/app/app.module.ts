import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { headerComponent } from "./header/header.component";
import { todoComponent } from "./todo/todo.component";



@NgModule({
declarations: [
  headerComponent,
  AppComponent,
  todoComponent



],
imports:[
  BrowserModule ,
],

bootstrap:[AppComponent]
})

export class AppModule {

}
