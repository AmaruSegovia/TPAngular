import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  ticketArray: Ticket[] = [];

  constructor(private activatedRoute:ActivatedRoute, private ticketService:TicketService, private router:Router){
    this.ticketArray = new Array <Ticket> ;
  }
  ngOnInit(): void {
    this.ticketArray= this.ticketService.findAll();
  }
}
