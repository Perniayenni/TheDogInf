import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { DogComponent } from "./components/dog/dog.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'dog/:id', component: DogComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
