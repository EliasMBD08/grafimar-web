import { Component, ElementRef, HostListener } from '@angular/core';

import { NgClass } from '@angular/common';
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarLinkComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isMenuVisible = false;
  isScrolled = false;
  isFirstLink = true;
  tipoClass:string = '';

  constructor(private eRef: ElementRef, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isFirstLink = this.router.url === '/';
        if (this.isFirstLink) {
          this.tipoClass = 'fixed'
        } else {
          this.tipoClass = 'sticky top-0'
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuVisible = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 70;
  }

  onMenuClick(event: Event) {
    event.stopPropagation();
  }

  items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      link: '',
    },
    {
      label: 'Servicios',
      icon: 'pi pi-sparkles',
      link: 'servicios',
    },
    {
      label: 'Nosotros',
      icon: 'pi pi-users',
      link: 'nosotros',
    },
    // {
    //   label: 'Productos',
    //   icon: 'pi pi-box',
    //   link: 'productos',
    // },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      link: 'contacto',
    },
  ];
}
