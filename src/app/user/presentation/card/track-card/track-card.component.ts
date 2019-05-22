import { Input, Component } from '@angular/core';

@Component({
  selector: 'sistify-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent { 
  
  @Input() item: any;
}
