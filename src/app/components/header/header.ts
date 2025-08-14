import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  darkMode = false;

  toggleDarkMode(init = false) {
    if (init) {
      // Load saved theme or use OS preference
      const savedTheme = localStorage.getItem('theme');
      this.darkMode = savedTheme
        ? savedTheme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      // Toggle theme
      this.darkMode = !this.darkMode;
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    }
    // Apply theme class
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
  constructor() {
    this.toggleDarkMode(true); // Initialize dark mode based on saved preference or OS setting
  }
}