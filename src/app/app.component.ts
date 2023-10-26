import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi Primer App';
  public ArregloCards: Tarjeta[]=[];

  ngOnInit(): void {
    
    this.ArregloCards = [
      {titulo:'video1'},
      {titulo:'video2'},
      {titulo:'video3'},
      {titulo:'video4'},
      {titulo:'video5'},
      {titulo:'video6'},
    ]
  }
  
}
