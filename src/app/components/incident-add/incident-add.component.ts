import { Component, OnInit } from '@angular/core';
import { Priority } from 'src/app/models/priority';
import { PriorityService } from '../../services/priority-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from 'src/app/services/inicent-service';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {
  message = '';
  priorityArray: Array<Priority> = [];

   constructor(private priorityService: PriorityService, private incidentService: IncidentService) { }
  incidentForm = new FormGroup({
    priorityId: new FormControl('', [Validators.required]),
    domainName: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    creator: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),

  });
  ngOnInit(): void {

    this.priorityService.getAll().then(response => {
      this.priorityArray = response;
    })
      .catch(error => { });
  }

  onSubmit() {
    let incident = new Incident();
    incident.priorityId = this.incidentForm.get('priorityId').value;
    incident.domainName = this.incidentForm.get('domainName').value;
    incident.title = this.incidentForm.get('title').value;
    incident.description = this.incidentForm.get('description').value;
    incident.creator = this.incidentForm.get('creator').value;
    incident.phoneNumber = this.incidentForm.get('phoneNumber').value;

    this.incidentService.add(incident).then(response => {
      this.message = 'incident successfully added';
    })
      .catch(error => {
        this.message = 'An error ocurred';
      });
  }
}
