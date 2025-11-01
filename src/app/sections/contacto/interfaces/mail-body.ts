import { Contact } from "./contact";

export interface MailBody {
    contacto: Contact,
    destinos: string,
    destinos_adicionales: string
}
