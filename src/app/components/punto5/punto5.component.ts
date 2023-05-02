import { TicketService } from './../../services/ticket.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})


export class Punto5Component {
  ticket: Ticket;

  constructor(private activatedRoute:ActivatedRoute, private ticketService:TicketService, private router:Router){
    this.ticket = new Ticket;
  }

  crearTickets(){
    console.log(`${this.ticket.dni}`)
    this.ticket.fechaCobro=new Date();
    this.ticketService.create(this.ticket)
    this.router.navigate(["models"]);
  }

  buscarTickets(){
    this.ticketService.findById(this.ticket.dni)
  }

  eliminarTickets(){
    this.ticketService.delete(this.ticket.dni)
  }

  actualizarTicket(){
    this.ticketService.update(this.ticket.dni,this.ticket)
  }

  buscarTodoslosTickets(){
    this.ticketService.findAll()
  }
}