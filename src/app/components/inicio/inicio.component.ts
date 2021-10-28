import { Component, OnInit } from '@angular/core';
import { ListaNoticias, Noticias } from 'src/app/interfaces/noticias';
import { ListaNot, NotiNormal } from 'src/app/interfaces/noti-normal';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  ListaNoticias=ListaNoticias;
  ListaNot=ListaNot;

  constructor() { }

  ngOnInit(): void {
  }

}
