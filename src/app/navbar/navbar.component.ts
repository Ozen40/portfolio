import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  projets = [
    { nom: 'OpenENT', route: '/openent' },
    { nom: 'Grand Angle', route: '/grandangle' },
    { nom: 'Geosavior', route: '/geosavior' },
    { nom: 'LinkNTrade', route: '/linkntrade' },
    { nom: 'Speedclean', route: '/speedclean' }
  ];

  competences = [
    { nom: 'Angular', route: '/angular' },
    { nom: 'Java', route: '/java' },
    { nom: 'SQL', route: '/sql' },
    { nom: 'Git', route: '/git' },
    { nom: 'TU', route: '/tu' },
    { nom: 'UX/UI', route: '/ux' },
    { nom: 'Communication', route: '/communication' },
    { nom: 'Rédaction de documentation', route: '/doc' },
    { nom: 'Autonomie', route: '/autonomie' },
    { nom: 'Gestion de projet', route: '/gestion' }
  ];
}
