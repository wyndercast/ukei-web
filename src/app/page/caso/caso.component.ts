import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogContentComponent } from 'src/app/components/dialog-content/dialog-content.component';
import { Caso } from 'src/app/models/caso.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrls: ['./caso.component.css']
})
export class CasoComponent implements OnInit{
  
  public caso : Observable<Caso> | undefined;
  public casoForm! : FormGroup;
  public submmited = false;

  constructor(private readonly strapiService: StrapiService, public formBuilder: FormBuilder, public dialog: MatDialog){

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent,{
        data: {descripcion: 'Hemos recibido tus datos y pronto nos pondremos en contacto contigo por correo.',
               imagen: '/assets/image/modal.png'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.casoForm = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      correoElectronico:  ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      descripcionCasoCliente: ['', Validators.required]
    })
    this.caso = this.strapiService.casoService();
  }

  get validate() { return this.casoForm.controls; }

  get primerNombre() {return this.casoForm?.get('primerNombre')}
  get correoElectronico() {return this.casoForm?.get('correoElectronico')}
  get descripcionCasoCliente() {return this.casoForm?.get('descripcionCasoCliente')}

  crearCaso():void{
    this.submmited = true;
    if(this.casoForm.invalid){
      return;
    }
    let html = '';
    this.strapiService.getFile().subscribe(data => {
      html = data;
    })
    let casoNuevo = {
      primerNombre: this.casoForm?.get('primerNombre')?.value,
      correoElectronico: this.casoForm?.get('correoElectronico')?.value,
      descripcionCasoCliente: this.casoForm?.get('descripcionCasoCliente')?.value,
      usuarioId: 1,
      estadoTramite: 'ANÁLISIS CASO'
    }
    this.strapiService.crearCasoService(casoNuevo).subscribe(caso =>{
      this.openDialog();
      this.casoForm.reset();
      this.submmited = false;
      const email = {
        recipient: casoNuevo.correoElectronico,
        msgBody: html,
	      subject: "¡Hemos recibido tu solicitud!"
      }
      this.strapiService.enviarCorreo(email).subscribe(data =>{
          console.log(data);
      })
    })
  }



}
