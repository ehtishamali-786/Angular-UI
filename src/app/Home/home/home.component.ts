import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cardData = [
    {
      name: 'Lorem Ipsum Dolor',
      src: '../../../assets/Group1306.png',
      alt:'1306',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Lorem Ipsum Dolor',
      src: '../../../assets/Group594.png',
      alt:'594',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Lorem Ipsum Dolor',
      src: '../../../assets/Group1358.png',
      alt:'1358',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Lorem Ipsum Dolor',
      src: '../../../assets/Group674.png',
      alt:'674',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Lorem Ipsum Dolor',
      src: '../../../assets/Group274.png',
      alt:'274',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Image 3',
      src: '../../../assets/Group672.png',
      alt:'672',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    
  ]

}
