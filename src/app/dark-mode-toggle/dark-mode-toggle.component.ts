import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})

export class DarkModeToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const html:Element = document.querySelector('html')!;
    const check:Element = document.querySelector('#checkbox')!;

    check.addEventListener('change', function(){
      html.classList.toggle('dark');
    });

  }
}
