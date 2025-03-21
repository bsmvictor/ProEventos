import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CollapseModule,
    BsDropdownModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMenu(): boolean {
    return this.router.url !== '/user/login';
  }

}
