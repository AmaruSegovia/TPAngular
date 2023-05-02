import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketArray: Ticket[] = [];

  constructor() { 
    this.ticketArray= new Array<Ticket>();

  }

  create(Ticket: Ticket) {
    this.ticketArray.push(Ticket);
  }

  findAll(): Ticket[] {
    return this.ticketArray;
  }

 findById(dni: number): Ticket | undefined {
  const ticket = this.ticketArray.find((Ticket) => Ticket.dni === dni);
  return ticket;
}


  update(dni: number, Ticket: Ticket) {
    const index = this.ticketArray.findIndex((Ticket) => Ticket.dni === dni);
    this.ticketArray[index] = Ticket;
  }

  delete(dni: number): void {
    const index = this.ticketArray.findIndex((Ticket) => Ticket.dni === dni);
    this.ticketArray.splice(index, 1);
  }

}
