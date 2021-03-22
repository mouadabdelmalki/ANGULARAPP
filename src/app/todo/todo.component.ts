import { Component } from "@angular/core";


@Component({
selector: 'todo-comp',
templateUrl:'./todo.component.html',
styleUrls:['todo.component.css']

})

export class todoComponent {
  todoOne: String= "this Projet1 " ;
  todoTwo: String= "Projet2" ;
  todoThree: String= "Projet3" ;
  todoFore: String= "Projet4" ;

  todos = [
    {
      todoname : "projet 1",
      todostatut : true ,
      image:"http://placehold.it/110" ,
      information:""
    },
    {
      todoname : "projet 2",
      todostatut : false ,
      image:"http://placehold.it/110",
      information:""
    },
    {
      todoname : "projet 3",
      todostatut : true ,
      image:"https://images.caricos.com/j/jaguar/2018_jaguar_xe_sv_project_8/images/1600x1200/2018_jaguar_xe_sv_project_8_110_1600x1200.jpg"

    },
  ]
  onMouselv(i: number){
   this.todos[i].information = this.todos[i].todoname ;
  }
  OnChangeStatus(i: number){

    this.todos[i].todostatut = !this.todos[i].todostatut
  }

}
