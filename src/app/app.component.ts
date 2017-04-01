import { Component } from '@angular/core';
import {LifecycleComponent} from "./lifecycle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[LifecycleComponent]
})
export class AppComponent {
  title = 'app works fine!';
  delete = false;
  test = "Starting value";
  boundValue = 1000;
}
