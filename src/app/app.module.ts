import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './page/home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import { SwiperComponent } from './components/swiper/swiper.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';
import { SobreNosotrosComponent } from './page/sobre-nosotros/sobre-nosotros.component';
import { ArticlesComponent} from './page/blog/articles/articles.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormComponent } from './components/form/form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionModule, SharedModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ArticleComponent } from './page/blog/article/article.component';
import { BlogComponent } from './page/blog/blog.component';
import { ConsultasComponent } from './page/consultas/consultas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CasoComponent } from './page/caso/caso.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    SwiperComponent,
    FooterComponent,
    ConsumidorComponent,
    DatosPersonalesComponent,
    SobreNosotrosComponent,
    ArticlesComponent,
    HelpSectionComponent,
    StepperComponent,
    FormComponent,
    AccordionComponent,
    BreadcrumbComponent,
    ArticleComponent,
    BlogComponent,
    ConsultasComponent,
    CasoComponent,
    DialogComponent,
    DialogContentComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    CarouselModule,
    MatProgressSpinnerModule,
    MarkdownModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
 },
 {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
