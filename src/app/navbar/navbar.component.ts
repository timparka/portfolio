import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  openMenu = false;
  darkMode = false;
  faBars = faBars;
  faTimes = faTimes;

  ngOnInit() {
    console.log('Navbar component initialized');
  }

  toggleMenu() {
    console.log("Toggling menu");
    this.openMenu = !this.openMenu;
  }

  constructor(private router: Router) {}

  goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateSmooth(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      if (sectionId === 'skills' || sectionId === 'projects') {
        const y = section.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  
  toggleDark() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
}
