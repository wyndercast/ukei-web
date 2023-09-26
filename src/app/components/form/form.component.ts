import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StrapiService } from 'src/app/services/strapi.service';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Input() Data : any;
  public casoForm! : FormGroup;
  public submmited = false;
  constructor(public router: Router, public formBuilder: FormBuilder, private readonly strapiService:StrapiService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.casoForm = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      correoElectronico:  ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      descripcionCasoCliente: ['', Validators.required]
    })
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

  get validate() { return this.casoForm.controls; }

  get primerNombre() {return this.casoForm?.get('primerNombre')}
  get correoElectronico() {return this.casoForm?.get('correoElectronico')}
  get descripcionCasoCliente() {return this.casoForm?.get('descripcionCasoCliente')}

  crearCaso():void{
    this.submmited = true;
    console.log("dcdsc")
    if(this.casoForm.invalid){
      console.log(this.casoForm.controls)
      return;
    }
    let html = '';
    console.log("cdcdcd")
    this.strapiService.getFile().subscribe(data => {
      html = data;
    })
    console.log("cdcdcd")
    let casoNuevo = {
      primerNombre: this.casoForm?.get('primerNombre')?.value,
      correoElectronico: this.casoForm?.get('correoElectronico')?.value,
      descripcionCasoCliente: this.casoForm?.get('descripcionCasoCliente')?.value,
      usuarioId: 1,
      estadoTramite: 'ANÁLISIS CASO'
    }
    this.strapiService.crearCasoService(casoNuevo).subscribe(caso =>{
      console.log("csdcsdcds")
      this.openDialog();
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
