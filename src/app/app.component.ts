import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
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
      {titulo:'video1', subtitulo: 'Subtitulo video 1', image:"https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"},
      {titulo:'video2', subtitulo: 'Subtitulo video 2', image:"https://demos.maugelves.com/jpg-formats/kitty-baseline.jpg"},
      {titulo:'video3', subtitulo: 'Subtitulo video 3', image:"https://tinyjpg.com/images/social/website.jpg"},
    ]
  }
  
}
