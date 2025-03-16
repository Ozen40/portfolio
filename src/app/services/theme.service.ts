import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'dark-mode'; // Clé pour stocker le mode dans localStorage

  constructor() {
    // Vérifie si un thème est déjà enregistré dans le localStorage
    const isDarkMode = localStorage.getItem(this.darkModeKey) === 'true';
    this.setDarkMode(isDarkMode);
  }

  /**
   * Active ou désactive le mode sombre
   * @param isDark true pour activer le dark mode, false pour le désactiver
   */
  setDarkMode(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem(this.darkModeKey, 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem(this.darkModeKey, 'false');
    }
  }

  /**
   * Alterne entre mode sombre et clair
   */
  toggleDarkMode(): void {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(this.darkModeKey, isDark.toString());
  }

  /**
   * Retourne l'état actuel du dark mode
   */
  isDarkMode(): boolean {
    return document.body.classList.contains('dark-mode');
  }
}
