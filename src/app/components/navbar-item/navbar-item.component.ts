import { Component, Input } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/NavBarItem';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent {
  @Input() item: NavBarItem | undefined;
  @Input() active = false;
}
