import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { Articles } from 'src/app/models/articles.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{


  id: number | undefined;
  article : Observable<Article> | undefined;
  articles : Observable<Articles> | undefined;
  public Articles : any[] = []; 
  public allArticles : any[] = [];

  constructor(private route: ActivatedRoute, private readonly strapiService: StrapiService){
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
      this.article = this.strapiService.articlesById(this.id);
    })

    this.articles = this.strapiService.articlesService();
    this.cargarTodos();
  }

  cargarTodos():void{
    this.articles?.subscribe(art => {
      for(var i = 0; i < art.data.length; i++ ){
        if(i+1 != this.id){
          this.allArticles?.push(art.data[i]);
          if(this.Articles.length < 3 ){
            this.Articles.push(art.data[i]);
          }
        }
       
      }
  });
  }  

}
