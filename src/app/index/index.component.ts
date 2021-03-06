import { Component, OnInit } from '@angular/core';
import { IntegrantesService } from '../integrantes.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public integrantesService: IntegrantesService) { }

  ngOnInit(): void {
    this.integrantesService.start();
  }

}