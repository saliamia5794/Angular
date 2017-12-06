import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject'; // c'est un object qui est a la fois un  observer et observable

@Injectable()
export class JobService {
  jobs = [];
  jobsSubject = new Subject(); // nouvelle instance de Subject appelé jobsSubject

  constructor(private http: Http) { }

  getJobs() {
  return this.http.get('data/jobs.json')
                  .map(res => res.json());
  }

  /*
  grace à la méthode next(),nous poussons les données vers les gens qui vont
   s'abonner, notre JobListComponent aimerai bien etre au courant quand un
   nouveau job arrive pour pouvoir l'afficher.C'est grace au service qu'on
   peut faire communiquer des component qui sont au meme niveau
  */
  addJob(jobData) {
    jobData.id = Date.now(); // creer un id unique
    return this.jobsSubject.next(jobData);

  }

}
