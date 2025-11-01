import { Component, input } from '@angular/core';
import Garantia from '../../interfaces/garantia';

@Component({
  selector: 'app-card-garantia',
  standalone: true,
  imports: [],
  templateUrl: './card-garantia.component.html',
  styleUrl: './card-garantia.component.scss'
})
export class CardGarantiaComponent {
  garantia = input.required<Garantia>();
}
