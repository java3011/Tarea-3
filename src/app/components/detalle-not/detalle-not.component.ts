import { Component, OnInit } from '@angular/core';
import { ListaNoticias, Noticias } from '../../interfaces/noticias';
import { ActivatedRoute, Route } from '@angular/router';
import { Categorias, ListaCategoria } from '../../interfaces/categorias';


@Component({
  selector: 'app-detalle-not',
  templateUrl: './detalle-not.component.html',
  styleUrls: ['./detalle-not.component.scss']
})
export class DetalleNotComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  id:number=0;
  Noticia:any;
  Categoria:any;

  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
  }

  ngOnInit(): void {
    this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    this.Categoria=ListaCategoria.find(objeto=>objeto.id==this.Noticia.idCategoria);
  }

}
