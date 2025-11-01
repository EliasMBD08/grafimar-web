import { Component, input } from '@angular/core';
import Producto from '../../interfaces/producto';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [ImgBrokenDirective],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.scss'
})
export class CardProductoComponent {
  producto = input.required<Producto>();
}
