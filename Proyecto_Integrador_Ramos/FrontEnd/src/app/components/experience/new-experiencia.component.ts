import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  tiempoE: string = '';
  empresaE: string = '';
  activatedRouter: any;

  constructor(private sExperiencia: SExperienciaService, private router: Router, public imgService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.tiempoE, this.empresaE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  uploadImg($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Expe_" + id;
    this.imgService.uploadImg($event, name)
  }

}