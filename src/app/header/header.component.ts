import { Component } from '@angular/core';

interface navItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: navItem[] = [
    {title: 'Recipes', link: '#'},
    {title: 'Shoping List', link: '#'},
  ];

  menus: navItem[] = [
    {title: 'Item 1', link: '#'},
  ];
}
