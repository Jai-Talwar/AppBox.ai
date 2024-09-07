import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { JiraAppComponent } from './jira-app/jira-app.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleCallComponent } from './schedule-call/schedule-call.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'apps/:appId/:appName',
        component: JiraAppComponent,
      },
      {
        path: 'schedule-call',
        component: ScheduleCallComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
