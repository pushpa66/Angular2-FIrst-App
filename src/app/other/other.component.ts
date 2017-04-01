import {Component} from '@angular/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  entryComponents: [PropertyBindingComponent]
})
export class OtherComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 5;

}
