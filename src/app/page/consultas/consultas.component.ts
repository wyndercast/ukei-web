import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogContentComponent } from 'src/app/components/dialog-content/dialog-content.component';
import { Consulta } from 'src/app/models/consulta.model';
import { Tramite } from 'src/app/models/tramite.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{

  public consulta : Observable<Consulta> | undefined;
  public tramite : Tramite | undefined;
  public formTramite! : FormGroup;
  public step! : number;
  public index : string[]= [];
  public submmited = false;
  constructor(private readonly strapiService : StrapiService,private formBuilder: FormBuilder,public dialog: MatDialog){
      
  }

  ngOnInit(): void {
    this.consulta = this.strapiService.consultaService();
    this.formTramite =  this.formBuilder.group({
      numeroTramite : ['', Validators.required],
      documento : ['', Validators.required]
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent,
      {data: {descripcion: 'El tramite que esta consultado no existe o no ha empezado en el proceso',
              imagen: '/assets/image/Frame.png'}}
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  get validate() { return this.formTramite.controls; }

  get documento() { return this.formTramite.get('documento'); }

  get numeroTramite() { return this.formTramite.get('numeroTramite'); }

  consultarTramite():void{
    this.submmited = true;
    this.index = [];
    if(this.formTramite.invalid){
      return;
    }

    this.strapiService.consultaDeTramite(this.formTramite!.get('numeroTramite')!.value, this.formTramite!.get('documento')!.value).subscribe((tramite:Tramite[]) => {
        this.tramite = tramite[0];
        if(this.tramite == undefined){
          this.openDialog();
          return;
        }
        this.strapiService.consultaEstados().subscribe((estados:any[]) =>{
          estados = estados.reverse();
          estados.forEach(element => {
            if(element.homologado != 'NO APLICA'){
              this.index.push(element.homologado);
            }
          });
          this.index = [...new Set(this.index)];
          console.log(this.index)
          this.cargarDatos(this.tramite);
        })
    });
  }

  cargarDatos(tramite:any){
    this.strapiService.consultaEstadoHomologado({estado: tramite.estado}).subscribe((estados:any[])=>{
      console.log(estados)
      if(estados[0] == undefined || estados[0].homologado == 'NO APLICA'){
        this.tramite = undefined;
        this.openDialog();
        return;
      }  
      this.tramite!.homologado = estados[0].estado;
        this.tramite!.descripcion = estados[0].observacion;
        console.log('wwswsw', estados[0].homologado)
        this.step =  this.index.indexOf(estados[0].homologado);
        console.log(this.step)
        if(this.step >= 3 ){
          this.index.splice(0, 2)
        }else if(this.step == 0){
          this.index.splice(1, 2);
        }else if(this.step == 1){
          this.index.splice(0, 1);
          this.index.splice(1, 1);
        }
        this.step =  this.index.indexOf(estados[0].homologado);
    });     
  }

}
