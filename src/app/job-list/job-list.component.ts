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

  ngOnInit() {
    this.jobService.getJobs()
                   .subscribe (
                    data => this.jobs = data,
                    error => {
                     console.error(error);
                     this.error = error;
                    }
                    );

   }
}
