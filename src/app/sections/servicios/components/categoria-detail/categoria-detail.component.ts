import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ServiciosComponent from '../../servicios.component';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-categoria-detail',
  standalone: true,
  imports: [],
  templateUrl: './categoria-detail.component.html',
  styleUrl: './categoria-detail.component.scss'
})
export class CategoriaDetailComponent implements OnInit {

  categoria: Categoria | undefined;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.categoria = JSON.parse(params['data']);
        console.log(this.categoria);
      }
    });
  }

}

export default CategoriaDetailComponent;