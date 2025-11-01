import { AsyncPipe, NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from './services/contacto.service';
import { Observable } from 'rxjs';
import { MailResponse } from './interfaces/mail-response';
import { MailBody } from './interfaces/mail-body';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgClass, ToastModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent implements OnInit {
  respuesta: MailResponse | null = null;
  private body: MailBody = {} as MailBody;
  constructor(
    private service: ContactService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  formulario = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{9}$'),
      ]), // Validación de 9 dígitos
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
    })
  );

  onSubmit() {
    if (this.formulario().valid) {
      this.body = {
        contacto: this.formulario().value,
        destinos: 'elias.developer.08@gmail.com',
        destinos_adicionales: '',
      };

      console.log(this.body);
      this.service.sendMail(this.body).subscribe({
        next: (response) => {
          this.respuesta = response;
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `${response.message}`,
            life: 5000
          });
          this.formulario().reset();
        },
        error: (error) => {
          const errorMessage = error.error?.message || 'Hubo un problema al enviar el mensaje.';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
          life: 5000
        });
        },
        complete: () => {
          // this.messageService.add({
          //   severity: 'info',
          //   summary: 'Información',
          //   detail: 'Proceso finalizado.',
          //   life: 5000
          // });
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'El formulario no es válido. Por favor verifica los campos.',
        life: 5000
      });
    }
  }

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
      link: 'https://maps.google.com/?q=Av.+Bolivia+148+Int+2064',
      label: 'Dirección Oficina',
      text: 'Av. Bolivia 148 - Int 2064',
    },
    {
      icon: 'pi pi-map-marker',
      link: 'https://maps.google.com/?q=Jr.+Pastaza+520+Breña',
      label: 'Dirección Planta',
      text: 'Jr. Pastaza 520 - Breña',
    },
  ];
}

export default ContactoComponent;
