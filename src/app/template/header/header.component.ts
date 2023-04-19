import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routerLink!: string;

  constructor(router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.urlAfterRedirects;
      }
    });
  }
}
