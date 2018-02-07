import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'; // c'est un object qui est a la fois un  observer et observable
import 'rxjs/add/operator/do';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class JobService {

  initialJobs = [];
  jobs = []; //tableau qui permet dajouter nos propre job
  jobsSubject = new Subject(); // nouvelle instance de Subject appelé jobsSubject
  BASE_URL = 'http://localhost:4201/';
  constructor(private http: Http) { }
/*
  getJobs() {
    //on a à la fois des données de jobs.json+des données ajoutées par notre formulaire
    if (this.jobs.length && this.initialJobs.length > 0) {
      console.log('case if');
      return Observable.of([...this.jobs, ...this.initialJobs]);

    } else if (this.jobs.length > 0 && this.initialJobs.length === 0) {
      console.log('cas else if');
      return this.http.get('data/jobs.json')
        .map(res => res.json())
        .do( data => {
                       this.initialJobs = data;
                      this.jobs = [...this.jobs, ...this.initialJobs];
            });

    } else {
      console.log('case else');
      return this.http.get(this.BASE_URL + 'api/jobs')
        .map(res => res.json())
        .do(data => this.initialJobs = data);

    }

  } */



  getJobs() {
    return this.http.get(this.BASE_URL + 'api/jobs')
                     .map(res => res.json());
  }

  /*
  grace à la méthode next(),nous poussons les données vers les gens qui vont
   s'abonner, notre JobListComponent aimerai bien etre au courant quand un
   nouveau job arrive pour pouvoir l'afficher.C'est grace au service qu'on
   peut faire communiquer des component qui sont au meme niveau
  */
  addJob(jobData) {
    console.log('inside addjob');
    jobData.id = Date.now(); // creer un id unique
    //this.jobs = [jobData, ...this.jobs]; // permet la mise a jour des offres
   // return this.jobsSubject.next(jobData);
   return this.http.post(this.BASE_URL + 'api/jobs', jobData)
                    .map( res => {
                          console.log(res);
                          this.jobsSubject.next(jobData);

                          });

  }
  //on a des jobs a récupéré du jobs.json


  //on a pas encore recupere de donnée

  // des données à la fois du jobs.json plus les données ajouté par notre formulaire

}
