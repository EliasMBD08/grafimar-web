import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavbarLink {
  label: string,
  link: string,
}

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-link.component.html',
  styleUrl: './navbar-link.component.scss'
})
export class NavbarLinkComponent {
  @Input() navbarLink!: NavbarLink;
}
