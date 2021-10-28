import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;
  activarMen:boolean=false;

  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      nombreC:['', Validators.required],
      celular:['', Validators.required],
      usuario:['', Validators.required],
      dir:['', Validators.required],
      men:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ValidarDatos(){
    console.log(this.formulario.get("nombreC")?.value);
    console.log(this.formulario.get("celular")?.value);
    console.log(this.formulario.get("usuario")?.value);
    console.log(this.formulario.get("dir")?.value);
    console.log(this.formulario.get("men")?.value);

    this.activarMen=true;

  }
}
