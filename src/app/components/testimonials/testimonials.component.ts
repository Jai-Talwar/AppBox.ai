import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  slides = [
    {
      id: '1',
      rating: 4,
      summary: 'Risk Analyzer',
      description:
        'If you love managing your personal checklist, then is a fantastic plugin to use. Moreover it is right in Jira so you never forget it.',
      author: 'Marie Baum',
    },
    {
      id: '2',
      rating: 4,
      summary: 'Backlog Prioritization',
      description: 'We`re highly satisfied with the backlog prioritization app. Awesome support team, very helpful even during weekends ... 5 stars!',
      author: 'Jimmy Kay',
    },
    {
      id: '3',
      rating: 4,
      summary: 'Checklist',
      description: 'Great support! Always open for new features!',
      author: 'Simon Huprich',
    },
    {
      id: '4',
      rating: 4,
      summary: 'Checklist',
      description:
        'A great plugin to manage key checkpoints as work flows through different stages. Can also restrict workflow based on items ticked. A nice way also to audit work over the period.',
      author: 'Nitin Garg',
    },
    {
      id: '5',
      rating: 4,
      summary: 'Backlog Prioritization',
      description: 'Thanks a lot for your app. It help us to do our work in a better and faster way!',
      author: 'Ludmila Nikiforova',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
