import {Component} from '@angular/core';
import {PropertyBindingComponent} from "./property-binding.component";
import {EventBindingComponent} from "./event-binding.component";
import {TwoWayBindingComponent} from "./two-way-binding.component";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  entryComponents: [PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent]
})
export class OtherComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 5;

  onClicked(value:string){
    alert(value);
  }
}
