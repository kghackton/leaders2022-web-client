import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'tp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  constructor() { }

}