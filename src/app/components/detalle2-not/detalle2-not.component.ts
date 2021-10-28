import { Component, OnInit } from '@angular/core';
import { ListaNot, NotiNormal } from 'src/app/interfaces/noti-normal';
import { ActivatedRoute, Route } from '@angular/router';
import { Categorias, ListaCategoria } from 'src/app/interfaces/categorias';

@Component({
  selector: 'app-detalle2-not',
  templateUrl: './detalle2-not.component.html',
  styleUrls: ['./detalle2-not.component.scss']
})
export class Detalle2NotComponent implements OnInit {
  
  ListaNot=ListaNot;
  id:number=0;
  Not:any;
  Cat:any;

  constructor(private rut:ActivatedRoute) { 
    this.rut.params.subscribe(parame=>{
      this.id=parame["id"];
    })
  }

  ngOnInit(): void {
    this.Not=ListaNot.find(objeto=>objeto.id==this.id);
    this.Cat=ListaCategoria.find(objeto=>objeto.id==this.Not.idCategoria);
  }

}
