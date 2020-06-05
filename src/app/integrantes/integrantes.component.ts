import { Component, OnInit } from '@angular/core';
import { IntegrantesService } from '../integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {

  
  constructor(public integrantesService: IntegrantesService) { }

  ngOnInit() {
    this.integrantesService.start();
  }

}
