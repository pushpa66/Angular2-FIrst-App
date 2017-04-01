import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name"/>
    <input type="number" [(ngModel)]="person.age"/>
    <h3>{{person.name}}</h3>
    <h3>{{person.age}}</h3>
  `
})
export class TwoWayBindingComponent {
  person = {
    name: "Max",
    age:27
  }
}
