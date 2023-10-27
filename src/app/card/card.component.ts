import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image?: string;
  public Titulo: string = "Angular";

  @Input() dataEntrante:any;
  constructor(){

  }
  ngOnInit(): void {
    this.image = "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg";
  }
}
