import { Component, input } from '@angular/core';
import { Empleado } from '../../interfaces/empleado';

@Component({
  selector: 'app-card-empleado',
  standalone: true,
  imports: [],
  templateUrl: './card-empleado.component.html',
  styleUrl: './card-empleado.component.scss'
})
export class CardEmpleadoComponent {
  empleado = input.required<Empleado>();
}
