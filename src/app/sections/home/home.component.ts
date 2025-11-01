import { Component, OnInit } from '@angular/core';
import { CardProductoComponent } from '../../shared/components/card-producto/card-producto.component';
import { CardGarantiaComponent } from './components/card-garantia/card-garantia.component';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { AccordionModule } from 'primeng/accordion';
import { PreguntaRespuestaComponent } from './components/pregunta-respuesta/pregunta-respuesta.component';
import Garantia from './interfaces/garantia';
import PreguntaRespuesta from './interfaces/pregunta-respuesta';
import Producto from '../../shared/interfaces/producto';
import Cliente from './interfaces/cliente';
import prods_dest from '../../core/data/productos_destacados.json';
import carousel_items from '../../core/data/carousel_items.json';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CarouselItem } from '../../shared/interfaces/carousel-item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductoComponent, CardGarantiaComponent, CardClienteComponent, AccordionModule, PreguntaRespuestaComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  carousel_items: CarouselItem[] = [];

  garantias: Garantia[] = [
    {
      id: 1,
      nombre: "Calidad",
      desc: "Cumplimos con lo que prometemos a nuestros clientes",
      icon: "pi pi-verified"
    },
    {
      id: 2,
      nombre: "Puntualidad",
      desc: "Los envíos siempre son coordinados con el cliente",
      icon: "pi pi-clock"
    },
    {
      id: 3,
      nombre: "Confianza",
      desc: "Nuestra actividad comercial esta regulada por el código civil",
      icon: "fi fi-tr-handshake-trust"
    },
    {
      id: 4,
      nombre: "Asesoría",
      desc: "El usuario, puede solicitar la asistencia técnica de un especialista",
      icon: "fi fi-tr-person-circle-question"
    },
  ]

  clientes: Cliente[] = [
    {
      id: 1,
      url_img: '/images/clientes/logo_1.png'
    },
    {
      id: 2,
      url_img: '/images/clientes/logo_2.png'
    },
    {
      id: 3,
      url_img: '/images/clientes/logo_3.png'
    },
    {
      id: 4,
      url_img: '/images/clientes/logo_4.png'
    },
    {
      id: 5,
      url_img: '/images/clientes/logo_5.png'
    },
    {
      id: 6,
      url_img: '/images/clientes/logo_6.png'
    },
    {
      id: 7,
      url_img: '/images/clientes/logo_7.png'
    },
    {
      id: 8,
      url_img: '/images/clientes/logo_8.png'
    },
    {
      id: 9,
      url_img: '/images/clientes/logo_9.png'
    },
    {
      id: 10,
      url_img: '/images/clientes/logo_10.png'
    },
    {
      id: 11,
      url_img: '/images/clientes/logo_11.png'
    },
    {
      id: 12,
      url_img: '/images/clientes/logo_12.png'
    }
  ]

  preguntas_respuestas: PreguntaRespuesta[] = [
    {
      id: 1,
      pregunta: "¿Cómo realizo mi pedido?",
      respuesta: "Realizar un pedido es muy sencillo. Puedes hacerlo a través de nuestra página web seleccionando los productos que deseas, subiendo tus archivos y siguiendo los pasos indicados. También puedes comunicarte con nosotros por teléfono o correo electrónico para recibir asesoría personalizada y realizar tu pedido directamente con nuestro equipo."
    },
    {
      id: 2,
      pregunta: "¿Qué pasa si algo no salió bien con mi producto?",
      respuesta: "Nos tomamos muy en serio la satisfacción de nuestros clientes. Si tu producto no salió como lo esperabas, revisaremos el caso y haremos todo lo posible por solucionarlo. Puedes contactarnos a través de nuestros canales de atención al cliente, proporcionar los detalles de lo sucedido, y encontraremos la mejor solución, ya sea con una reimpresión o ajuste, según sea necesario."
    },
    {
      id: 3,
      pregunta: "¿Cómo pago mi pedido?",
      respuesta: "Ofrecemos varias formas de pago para tu comodidad. Puedes realizar el pago mediante transferencia bancaria, tarjetas de crédito/débito o plataformas de pago en línea. Si necesitas una factura, no dudes en solicitárnosla y la emitiremos de inmediato."
    },
    {
      id: 4,
      pregunta: "¿En qué tiempo me entregan mi pedido?",
      respuesta: "El tiempo de entrega depende del tipo de producto y la cantidad solicitada. En promedio, nuestros pedidos se completan entre 3 a 7 días hábiles. Si tienes un pedido urgente, por favor comunícalo con antelación, y haremos nuestro mejor esfuerzo para cumplir con tus plazos."
    },
    {
      id: 5,
      pregunta: "¿Hacen entrega a domicilio?",
      respuesta: "Sí, ofrecemos entrega a domicilio en la mayoría de las ciudades. Al momento de realizar tu pedido, podrás seleccionar la opción de entrega a domicilio y proporcionarnos la dirección de entrega. También puedes optar por recoger el pedido en nuestras instalaciones si así lo prefieres."
    },
    {
      id: 6,
      pregunta: "¿Qué tipo de impresión ofrecen?",
      respuesta: "Ofrecemos dos tipos principales de impresión: impresión offset e impresión digital. La impresión offset es ideal para grandes volúmenes, ya que ofrece una excelente calidad a un costo menor por unidad en tiradas largas. La impresión digital, por otro lado, es perfecta para tiradas cortas o urgentes, ya que permite tiempos de entrega más rápidos sin sacrificar la calidad."
    },
    {
      id: 7,
      pregunta: "¿Pueden ayudarme con el diseño gráfico?",
      respuesta: "¡Claro! Contamos con un equipo de diseñadores gráficos que pueden asesorarte en la creación o adaptación de tu diseño para que esté listo para imprimir. Si ya tienes tu diseño, simplemente asegúrate de que cumpla con nuestros requisitos técnicos. Si necesitas ayuda desde cero, te ofrecemos un servicio completo de diseño personalizado."
    },
    {
      id: 8,
      pregunta: "¿Qué tipos de materiales están disponibles?",
      respuesta: "Trabajamos con una amplia variedad de materiales según el tipo de producto que desees imprimir. Para papel, ofrecemos diferentes grosores, acabados (mate, brillante) y texturas. También imprimimos en vinilo, tela y otros materiales especiales para productos como banners, etiquetas, y packaging personalizado. Si tienes algo específico en mente, no dudes en consultarnos."
    },
    {
      id: 9,
      pregunta: "¿Cuál es la cantidad mínima de pedido?",
      respuesta: "La cantidad mínima de pedido depende del producto. Para algunos productos como tarjetas de presentación o flyers, no tenemos una cantidad mínima, pero otros productos más personalizados o complejos, como catálogos o packaging, pueden requerir una cantidad mínima. Contáctanos con tu proyecto específico y te daremos toda la información."
    },
    {
      id: 10,
      pregunta: "¿Cómo debo enviar mis archivos para la impresión?",
      respuesta: "Te recomendamos que envíes tus archivos en formato PDF con alta resolución, y que utilices colores CMYK para asegurar que los colores se impriman correctamente. También aceptamos archivos en formatos como Illustrator o EPS, siempre que estén correctamente configurados para impresión. Si tienes dudas sobre cómo preparar tus archivos, nuestro equipo estará encantado de ayudarte."
    },
    {
      id: 11,
      pregunta: "¿Qué pasa si mi pedido tiene un error?",
      respuesta: "Antes de la impresión final, te enviaremos una prueba digital para que la apruebes. Si, después de revisar la prueba, algo no está como lo esperabas, podemos hacer los ajustes necesarios. Si el error ocurrió en la producción final y no coincide con la prueba aprobada, haremos lo posible por corregirlo sin costo adicional. Queremos asegurarnos de que estés completamente satisfecho con el resultado."
    }
  ]

  ngOnInit(): void {
      this.productos = prods_dest;
      this.carousel_items = carousel_items
  }

}

export default HomeComponent;