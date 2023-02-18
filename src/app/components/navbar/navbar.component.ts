import { Component } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/NavBarItem';
import navbarItems from 'src/app/models/navbarItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: NavBarItem[] = navbarItems;
  activeItem: string | null = null;

  setActiveItem(item: NavBarItem) {
    this.activeItem = item.id;
  }

  itemIsActive(item: NavBarItem) {
    return this.activeItem === item.id;
  }
}
