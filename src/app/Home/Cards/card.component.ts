import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() text:any;
  @Input() name:any;
  @Input() src: string = "example.jpg";
  @Input() alt:any;

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
