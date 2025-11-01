import { Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-pregunta-respuesta',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './pregunta-respuesta.component.html',
  styleUrl: './pregunta-respuesta.component.scss'
})
export class PreguntaRespuestaComponent {
  title = input.required<string>();
}
