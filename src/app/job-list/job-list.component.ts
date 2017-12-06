import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {JobService} from '../services/job.service';

@Component({
  selector: 'app-cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs = [];
  error = '';

  constructor(private http: Http, private jobService: JobService) { }
  /*
  "..." spread operator permet d'exploser le tableau et recuperer
  chaque element du tableau plutot que d'avoir un tableau a deux dimension.
  le data dans le début du tableau veut dire qu'on mettra les nouveaux jobs
  devant il est présent grace au subscribe que nous avons fait sur getJob
  grace l'objet subject qui est déclaré dans le service lorsque l'on s'abonne
  dans this.jobService.jobData notre joblist est informé qu'il y a une nouvelle
  donnée qui a éte poussé grace au subject qui a fait un next
  */
  ngOnInit() {
    this.jobService.getJobs()
                   .subscribe (
                    data => this.jobs = data,
                    error => {
                     console.error(error);
                     this.error = error;
                    }
                    );
    this.jobService.jobsSubject.subscribe(data => {
      console.log(data);
      this.jobs = [data, ...this.jobs];

    });

   }
}
