import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        animate(1000),
      ]),
    ]),
  ]
})
export class HomeComponent {
  testClick() {
    console.log("Button clicked!");
  }
  navigateToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
  
  navigateSmooth(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
