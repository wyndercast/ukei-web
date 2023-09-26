import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from 'src/app/models/articles.model';
import { Blog } from 'src/app/models/blog.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  public blog : Observable<Blog> | undefined;
  public articles : Observable<Articles> | undefined;
  public Articles : any[] = []; 
  public allArticles : any[] = [];
  public position = 0;

  constructor(private readonly strapiService : StrapiService){

  }

  ngOnInit(): void {
      this.blog = this.strapiService.blogService();
      this.articles = this.strapiService.articlesService();
      this.cargarTodos();
    }

  cargarTodos():void{
    this.articles?.subscribe(art => {
      for(var i = 0; i < art.data.length; i++ ){
        this.allArticles?.push(art.data[i]);
        if(i < 8){
          this.Articles.push(art.data[i]);
          this.position++;
        }
      }
  });
  }  

  cargarBlogs(){
    console.log(this.position)
    for(var i = this.position; i < this.position + 3; i++ ){
      if(i == this.allArticles.length)
        break;

      this.Articles?.push(this.allArticles[i]);
    }
  }

}
