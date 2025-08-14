import { Component } from '@angular/core';
import { HomeGallary } from '../home-gallary/home-gallary';

@Component({
  selector: 'app-home',
  imports: [HomeGallary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards = [
    {
      icon: 'fa-solid fa-globe',
      title: 'Build Fast',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Build Smart',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Build Scalable',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    },
    {
      icon: 'fa-solid fa-shield-alt',
      title: 'Build Secure',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    },
    {
      icon: 'fa-solid fa-cog',
      title: 'Build Efficient',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    },
    {
      icon: 'fa-solid fa-user',
      title: 'Build for People',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, recusandae.'
    }
  ]
}
