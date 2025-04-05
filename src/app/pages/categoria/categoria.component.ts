import { Component, OnInit, signal } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../entity/Categoria';

@Component({
  selector: 'app-categoria',
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',


})
export class CategoriaComponent implements OnInit {
  constructor(private categoriService: CategoriaService) { }
  categorias = signal<Categoria[]>([])
  loading = signal<boolean>(false)
  // categorias: Categoria[]=[]

  ngOnInit(): void {
    this.viewCategory();
  }


  viewCategory(): void {
    this.loading.set(true)
    this.categoriService.getAllCategory().subscribe({
      next: (data) => {
        this.loading.set(false)
        this.categorias.set(data)
        // this.categorias= data
        console.log(this.categorias())


      },
      error: (error) => {
        console.log(error)


      }

    })

  }


}
