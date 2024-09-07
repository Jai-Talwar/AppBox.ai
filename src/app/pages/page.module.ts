import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JiraAppComponent } from './jira-app/jira-app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ScheduleCallComponent } from './schedule-call/schedule-call.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PageComponent, JiraAppComponent, ContactComponent, ScheduleCallComponent],
  imports: [CommonModule, PageRoutingModule, HttpClientModule, SharedModule],
})
export class PageModule {}
