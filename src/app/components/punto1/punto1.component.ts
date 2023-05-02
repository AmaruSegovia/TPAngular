import { Component, OnInit } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  modalSwitch:boolean = false;


  openModal() {
    this.modalSwitch = !this.modalSwitch;
  }

  constructor() {}

  ngOnInit(): void {}

  productos = [
    {
      id:1,
      nombre: "Peluche Sr.Pelo",
      descripcion: "El mejor peluche si sos un asesino",
      img: "../assets/img/peluche6.jpg",
      precio: 10,
      cantidad:0,
    },
    {
      id:2,
      nombre: "Peluche Nezuko",
      descripcion: "El mejor peluche si te gusta ir a cococho",
      img: "../assets/img/peluche2.jpg",
      precio: 15,
      cantidad:0,
    },
    {
      id:3,
      nombre: "Peluche Mob Psycho 100",
      descripcion: "El mejor peluche si tenes buenos gustos",
      img: "../assets/img/peluche3.jpg",
      precio: 20,
      cantidad:0,
    },
    {
      id:4,
      nombre: "Peluche Pochita",
      descripcion: "El mejor peluche si te gustan las motosierras",
      img: "../assets/img/peluche4.jpg",
      precio: 25,
      cantidad:0,
    }

  ];

  precioTotal: number = 0;
  productosSeleccionados: Producto[] = [];

  seleccionarProducto(producto: Producto) {
    this.productosSeleccionados.push(producto);
    this.precioTotal += producto.precio;
  }

  eliminarProducto(producto: Producto) {
    const index = this.productosSeleccionados.indexOf(producto);
    if (index > -1) {
      this.productosSeleccionados.splice(index, 1);
      this.precioTotal -= producto.precio;
    }
  }
}


