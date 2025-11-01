import { Component, input } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { ImgBrokenDirective } from '../../../../shared/directives/img-broken.directive';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ImgBrokenDirective, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  categoria = input.required<Categoria>();

  constructor(private router: Router) {}

  verDetalleCategoria(categoria: Categoria): void {
    this.router.navigate([`/categoria/${this.categoria().slug}`], {queryParams: {data: JSON.stringify(categoria)}});
    console.log(categoria);
  }
}
