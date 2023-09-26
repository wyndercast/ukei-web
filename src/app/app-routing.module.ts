import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';
import { SobreNosotrosComponent } from './page/sobre-nosotros/sobre-nosotros.component';
import { ArticlesComponent } from './page/blog/articles/articles.component';
import { ArticleComponent } from './page/blog/article/article.component';
import { BlogComponent } from './page/blog/blog.component';
import { ConsultasComponent } from './page/consultas/consultas.component';
import { CasoComponent } from './page/caso/caso.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent} ,
  { path: 'consumidor', component: ConsumidorComponent },
  { path: 'datos-personales', component: DatosPersonalesComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosComponent},
  { path: 'blog', redirectTo: 'blog/articles'},
  { path: 'blog', component: BlogComponent,
    children : [
      { path: 'articles', component: ArticlesComponent},
      { path: 'article/:id',component: ArticleComponent}
    ]
  },
  { path: 'consultas', component: ConsultasComponent},
  { path: 'caso', component: CasoComponent}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

