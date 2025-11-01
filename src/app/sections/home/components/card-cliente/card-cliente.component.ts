import { Component, input } from '@angular/core';
import Cliente from '../../interfaces/cliente';



@Component({
  selector: 'app-card-cliente',
  standalone: true,
  imports: [],
  templateUrl: './card-cliente.component.html',
  styleUrl: './card-cliente.component.scss'
})
export class CardClienteComponent {
  cliente = input.required<Cliente>();
}
