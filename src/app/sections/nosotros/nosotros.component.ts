import { Component } from '@angular/core';
import { Empleado } from './interfaces/empleado';
import { CardEmpleadoComponent } from './components/card-empleado/card-empleado.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CardEmpleadoComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  empleados: Empleado[] = [
    {
      id: 1,
      nombre: "Elias Marcos B.",
      puesto: "Sistemas",
      url_img: "/images/empleados/sistemas.webp"
    },
    {
      id: 2,
      nombre: "Erickson Marcos B.",
      puesto: "Gerente General",
      url_img: "/images/empleados/gerente.webp"
    },
    {
      id: 3,
      nombre: "Juan Marcos De La Cruz",
      puesto: "Gerente Ejecutivo",
      url_img: "/images/empleados/ejecutivo.webp"
    },
  ]
}

export default NosotrosComponent;