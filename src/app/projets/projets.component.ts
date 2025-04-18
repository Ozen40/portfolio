import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  projets = [
    { nom: 'OpenENT', route: '/openent', note: 4, logo: 'logo_ent.png', type: 'Technique' },
    { nom: 'Grand Angle', route: '/grandangle', note: 4, logo: 'logo_gda.png', type: 'Technique' },
    { nom: 'Geosavior', route: '/geosavior', note: 4, logo: 'logo_geosavior.png', type: 'Technique' },
    { nom: 'Link & Trade', route: '/linkntrade', note: 4, logo: 'logo_linkntrade.png', type: 'Technique' },
    { nom: 'Speedclean', route: '/speedclean', note: 4, logo: 'logo_speedclean.png', type: 'Technique' }
  ];
}
