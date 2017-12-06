import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import {JobService} from './services/job.service';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';

import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AboutComponent } from './about/about.component';



const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'jobs/add', component: JobAddFormComponent},
  {path: 'jobs/:id', component: JobDetailsComponent},
  {path: 'jobs', component: JobListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent,
    JobAddFormComponent,
    DaysAgoPipe,
    HomeComponent,
    JobDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
