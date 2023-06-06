import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { DrarvComponent } from './pages/drarv/drarv.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AreasComponent } from './pages/areas/areas.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'drarv',
    component: DrarvComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
