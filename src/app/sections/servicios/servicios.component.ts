import { Component, OnInit } from '@angular/core';
import { Categoria } from './interfaces/categoria';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RouterOutlet } from '@angular/router';
import data from '../../core/data/categorias.json'

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CategoriaComponent, RouterOutlet],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent implements OnInit {

  categorias: Categoria[] = [];

  ngOnInit(): void {
      this.categorias = data      
  }

}

export default ServiciosComponent;