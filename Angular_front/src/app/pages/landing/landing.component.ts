import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @ViewChild('typedText') typedTextRef!: ElementRef;

  slides = [
    {
      image: 'assets/carousel-1.jpg',
      title: '¡Bienvenido a la grieta del invocador!',
      text: 'Inicia sesión, regístrate y busca a otros invocadores para compartir tus partidas.',
      buttonText: 'Regístrate en League of Legends',
      buttonLink: ''
    },
    {
      image: 'assets/carousel-2.jpg',
      title: '¿Dónde caemos?',
      text: '¡No juegues solo! Regístrate en Fortnite y sube con ellos al autobús de batalla.',
      buttonText: 'Regístrate en Fortnite',
      buttonLink: ''
    },
    {
      image: 'assets/carousel-3.jpg',
      title: '¡Yo te cubro!',
      text: 'Elije a dedo tus compañeros de batalla... o deja que ellos te elijan a ti.',
      buttonText: 'Regístrate en Valorant',
      buttonLink: ''
    }
  ];

  currentSlide = 0;
  intervalId: any;

  constructor () {
    window.scrollTo(0,0)
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngAfterViewInit(): void {
    const options = {
      strings: [
        'Inicia sesión y descubre jugadores como tú, listos para formar equipo.',
        'Explora perfiles, encuentra afinidades y únete a partidas en los juegos que más te gustan.',
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    new Typed(this.typedTextRef.nativeElement, options);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
