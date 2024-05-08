import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Shopping List';
  items = [
    {item: "apple", qty: 3, completed: false},
    {item: "banana", qty: 5, completed: true},
    {item: "pear", qty: 1, completed: false}
  ];
}
