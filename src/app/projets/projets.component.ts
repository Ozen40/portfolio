import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  competences = [
    { nom: 'OpenENT', route: '/angular', note: 4, logo: 'logo_ent.png', type: 'Technique' },
    { nom: 'Grand Angle', route: '/java', note: 4, logo: 'logo_gda.png', type: 'Technique' },
    { nom: 'Geosavior', route: '/sql', note: 4, logo: 'logo_geosavior.png', type: 'Technique' },
    { nom: 'LinkNTrade', route: '/git', note: 4, logo: 'logo_linkntrade.png', type: 'Technique' },
    { nom: 'Speedclean', route: '/tu', note: 4, logo: 'logo_speedclean.png', type: 'Technique' }
  ];
}
