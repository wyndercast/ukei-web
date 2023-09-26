import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavBar } from '../models/navbar.model.';
import { Observable } from 'rxjs';
import { Home } from '../models/home.model';
import { Footer } from '../models/footer.model';
import { Consumidor } from '../models/consumidor.model';
import { DatosPersonales } from '../models/datos-personales.model';
import { SobreNosotros } from '../models/sobre-nosotros-model';
import { Blog } from '../models/blog.model';
import { Articles } from '../models/articles.model';
import { Article } from '../models/article.model';
import { Consulta } from '../models/consulta.model';
import { Tramite } from '../models/tramite.model';
import { Caso } from '../models/caso.model';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  constructor(private http : HttpClient) { }

  navbarService()  {
    return this.http.get<NavBar>(`${environment.localUrl}api/navbar?populate=*`);
  }

  homeService() {
    return this.http.get<Home>(`${environment.localUrl}api/home?populate=deep,10`);
  }

  footerService() {
    return this.http.get<Footer>(`${environment.localUrl}api/footer?populate=deep,10`);
  }

  consumidorService(){
    return this.http.get<Consumidor>(`${environment.localUrl}api/consumidor?populate=deep,10`);
  }

  datosPersonalesService(){
    return this.http.get<DatosPersonales>(`${environment.localUrl}api/sobre-nosotro?populate=deep,10`);
  }

  sobreNosotrosService(){
    return this.http.get<SobreNosotros>(`${environment.localUrl}api/nosotro?populate=deep,10`);
  }

  blogService(){
    return this.http.get<Blog>(`${environment.localUrl}api/blog?populate=deep,10`);
  }

  articlesService(){
    return this.http.get<Articles>(`${environment.localUrl}api/articles?populate=deep,2`);
  }

  articlesById(id:number){
    return this.http.get<Article>(`${environment.localUrl}api/articles/${id}?populate=deep,3`);
  }

  consultaService() {
    return this.http.get<Consulta>(`${environment.localUrl}api/consulta?populate=deep,3`);
  }

  casoService() {
    return this.http.get<Caso>(`${environment.localUrl}api/caso?populate=deep,3`);
  }

  consultaDeTramite(numeroTramite:number, documento:any): Observable<Tramite[]>{
    return this.http.get<Tramite[]>(`http://34.238.50.203:8080/tramites?numeroTramite=${numeroTramite}&documento=${documento}`); 
  }

  consultaEstadoHomologado(estado:any): Observable<any[]>{
    return this.http.post<any[]>(`http://34.238.50.203:8080/estados/getAllEstados`, estado); 
  }

  crearCasoService(caso:any): Observable<any> {
    return this.http.post<any>(`http://34.238.50.203:8080/tramites`, caso); 
  }
  consultaEstados(): Observable<any[]>{
    return this.http.post<any[]>(`http://34.238.50.203:8080/estados/getAllEstados`, {}); 
  }
  enviarCorreo(correo:any): Observable<any>{
    return this.http.post<any>(`http://34.238.50.203:9010/send-email`, correo); 
  }
  getFile(): Observable<any>{
    return this.http.get('assets/templates/correoBienvenida.html', { responseType: "text"});
  }


}
