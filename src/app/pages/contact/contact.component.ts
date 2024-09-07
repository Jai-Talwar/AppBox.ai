import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  supportEmail = 'support@appbox.ai';
  supportLinks = [
    { name: 'Checklist', url: 'https://appbox.atlassian.net/servicedesk/customer/portal/8' },
    { name: 'Backlog Prioritization', url: 'https://appbox.atlassian.net/servicedesk/customer/portal/10' },
    { name: 'Response Templates', url: 'https://appbox.atlassian.net/servicedesk/customer/portal/12' },
    { name: 'Risk Register', url: 'https://appbox.atlassian.net/servicedesk/customer/portal/11' }
  ];
}