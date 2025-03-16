import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }
}
