import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  servicios: { id: number, nombre: string, href: string }[] = [
    { id: 1, nombre: 'Gigantografías', href: '/gigantografias' },
    { id: 2, nombre: 'Imprenta', href: '/imprenta' },
    { id: 3, nombre: 'Sublimados', href: '/sublimados' },
    { id: 4, nombre: 'Formatería', href: '/formateria' },
    { id: 5, nombre: 'Merchandising', href: '/merchandising' },
  ];
  

  contactos = [
    {
      icon: 'pi pi-envelope',
      link: 'mailto:ventas@cgrafimar.com',
      label: 'Correo electrónico',
      text: 'ventas@cgrafimar.com',
    },
    {
      icon: 'pi pi-whatsapp',
      link: 'https://wa.me/51977729706',
      label: 'WhatsApp',
      text: '+51 977 729 706',
    },
    {
      icon: 'pi pi-map-marker',
      link: 'https://maps.google.com/?q=Av.+Bolivia+148+Int+123',
      label: 'Dirección',
      text: 'Av. Bolivia 148 - Int 148',
    },
  ];

  formasPago = [
    { src: '/images/logos/Yape.png', alt: 'Yape' },
    { src: '/images/logos/Plin.png', alt: 'Plin' },
    { src: '/images/logos/Visa.svg', alt: 'Visa' },
    { src: '/images/logos/Mastercard.svg', alt: 'Mastercard' },
  ];

  cuentasBancarias = [
    {
      logo: '/images/logos/bcp.svg',
      alt: 'BCP',
      numeroCuenta: '193-9914807-0-63',
      cuentaInterbancaria: '002-193-0099148070-6316',
    },
    {
      logo: '/images/logos/bbva.svg',
      alt: 'BBVA',
      numeroCuenta: '193-9914807-0-63',
      cuentaInterbancaria: '002-193-0099148070-6316',
    },
  ];
}
