import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-cc-job-add-form',
  templateUrl: './job-add-form.component.html',
  styleUrls: ['./job-add-form.component.css']
})
export class JobAddFormComponent implements OnInit {
   form: FormGroup;
   contractTypes= [
     {id: 1, name: 'stage', value: 'intership'},
     {id: 2, name: 'intérim', value: 'temp'},
     {id: 3, name: 'contrat à durée déterminée(CDD)', value: 'fixed-term'},
     {id: 4, name: 'contrat à durée idéterminée(CDI)', value: 'permanent'},
     {id: 5, name: 'indépendant', value: 'freelance'},
   ];


  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({

       id: -1,
       title: '',
       compagny: '',
       city: '',
       zipcode: 35,
       description: '',
       contract: '',
       salary: 0,
       currency: 'euros',
       startdate: new Date(),
       experience: '',
       status: '',
       area: '',
       field: '',
       publishdate: new Date(),
       lastupdate: new  Date()

    });

  }
  createJob() {
    console.log(this.form.value);
  }
}
