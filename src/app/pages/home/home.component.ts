import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apps = [
    {icon: 'assets/images/apps/checklist.webp', name: 'Checklist', about: 'Enhance productivity. Create ToDo lists, acceptance criteria, definition of done.'},
    {icon: 'assets/images/apps/backlog.webp', name: 'Backlog Prioritization', about: 'Prioritize your Project backlog like a PRO. Use ICE, RICE, WSJF (SAFe).'},
    {icon: 'assets/images/apps/risk.webp', name: 'Risk Analyzer', about: 'Register, Measure and Monitor Risk. Prevent loss.'},
    {icon: 'assets/images/apps/response.webp', name: 'Response Template', about: 'Create canned response templates, with dynamic variables, respond promptly.'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
