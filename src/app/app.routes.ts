import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "productos", component: ProductosComponent },
    { path: "categorias", component: CategoriaComponent }
];
