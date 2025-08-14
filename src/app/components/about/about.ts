import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  products = [
    {
      image: 'product/5.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/6.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/23.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/bg2.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/bg6.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/full-screen-smartphone-mockup-design_53876-65968.webp',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/phone-mockup-brown-background-vector_53876-164914.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    },
    {
      image: 'product/smartphone-mockup_1310-812.webp',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.'
    }
  ];
}
