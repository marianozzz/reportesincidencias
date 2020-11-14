import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from '../../services/inicent-service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  message: string = '';
    incidentArray: Array<Incident> = [];
  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.incidentService.getAll().then(response => {
      this.incidentArray = response;
    })
      .catch(error => { });
  }

}

